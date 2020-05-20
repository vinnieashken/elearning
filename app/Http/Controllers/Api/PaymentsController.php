<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Payment;
use App\Models\Subscription;
use App\Models\UserPublisher;
use App\Models\UserSubscription;
use App\Utils\Mpesa;
use App\Utils\PaymentAssist;
use DateInterval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentsController extends Controller
{
    use PaymentAssist;
    //
    public function getSubscriptions()
    {
        $model  = new Subscription();

        return $model->where('institution',0)->get(['id','subscription','description','cost','days']);
    }

    public function getInstitutionsPackages()
    {
        $model  = new Subscription();

        return $model->where('institution',1)->get(['id','subscription','description','cost','persons','days']);
    }

    public function startTransaction(Request $request)
    {
        $userid = $request->user_id;
        $packageid = $request->package_id;
        $phone = $request->mobile;
        $publishers = [];
        $students = 1;

        if(!is_numeric($userid))
        {
            return response()->json(["message"=> "Incorrect value for user id"] , 400);
        }

        if(!is_numeric($packageid))
        {
            return response()->json(["message"=> "Incorrect value for package id"] , 400);
        }

        $multiplier = 1;
        if($request->has('publishers'))
        {
            $publishers = $request->publishers;
            $multiplier = count($publishers);
        }

        if($request->has('students'))
        {
            $students = $request->students;
        }


        $digit = substr($phone,0,1);

        if($digit !== "0")
        {
            return response()->json(["message"=> "Incorrect Mobile number format"] , 400);
        }

        $packagemodel = new Subscription();
        $package = $packagemodel->find((int)$packageid);

        if(is_null($package ))
        {
            return response()->json(["message"=> "package not found"] , 400);
        }

        $mpesa = new Mpesa();
        $url = url('api/payments/mpesa/callbacks');
        //$url = "https://www.standardmedia.co.ke";

        $payment = new Payment();
        $existing = $payment->where('user_id',$userid)->where('status',1)->first();

        //return $existing;

        if(!is_null($existing))
        {
            if($package->institution == 1)
            {
                //$customer = Customer::where('id',$userid)->get()->first();
                //$institutionid = $customer->institution_id;
                //$students = $this->getStudentsCount($institutionid);
                //Log::info('Students count = '.$students);
                $cost = ($package->cost * ceil($students/ $package->persons));

                if($cost == 0)
                {
                    return response()->json(["message"=> "No active students to be paid for. total cost is 0"] , 400);
                }
                $existing->amount = $cost;
                $existing->institution_count = $students;
            }
            else
            {
                if(count($publishers) < 1)
                {
                    return response()->json(["message"=> "Please provide atleast one publisher"] , 400);
                }
                $existing->amount = $package->cost * $multiplier;
            }
            $existing->packageid = $package->id;
            $existing->save();
            $this->storePublishers($publishers,$userid,$packageid,$package->cost,"ELE".$existing->id);

            $result = $mpesa-> pushStk($package->cost,$phone,$url,'ELE'.$existing->id);
            $transaction = [
                'id'=> 'ELE'.$existing->id,
                'amount' => $existing->amount,
            ];

            return $transaction;
        }

        $payment->user_id = $userid;
        $payment->packageid = $package->id;
        $payment->channel = 'MPESA';

        if($package->institution == 1)
        {
            //$customer = Customer::where('id',$userid)->get()->first();
            //$institutionid = $customer->institution_id;
            //$students = $this->getStudentsCount($institutionid);
            $cost = ($package->cost * ceil($students/ $package->persons));

            if($cost == 0)
            {
                return response()->json(["message"=> "No active students to be paid for. total cost is 0"] , 400);
            }
            $payment->amount = $cost;
            $payment->institution_count = $students;
        }
        else
        {
            if(count($publishers) < 1)
            {
                return response()->json(["message"=> "Please provide atleast one publisher"] , 400);
            }

            $payment->amount = $package->cost * $multiplier;
        }
        $payment->save();

        $this->storePublishers($publishers,$userid,$packageid,$package->cost,"ELE".$payment->id);

        $result = $mpesa-> pushStk($package->cost,$phone,$url,"ELE".$payment->id);

        $transaction = [
            'id'=> 'ELE'.$payment->id,
            'amount' => $payment->amount,
        ];

        return $transaction;
    }

    public function startMpesaStkPush(Request $request)
    {
        $phone = $request->phone;
        $amount = $request->amount;

        $mpesa = new Mpesa();

        $url = url('api/payments/mpesa/callback');
        //$url = "https://www.standardmedia.co.ke/api/payments/mpesa/callback";

        $result = $mpesa-> pushStk($amount,$phone,$url,"ELE");
        return $result;
    }

    public function mpesaCallback(Request $request)
    {
        $transactionid = $request->transaction;
        $mpesacode = $request->mpesa_code;
        $phone = $request->sender_phone;
        $amount = $request->amount;

        preg_match_all("!(7[0-9]{8})!",$phone,$matches);
        $phone = '0'.$matches[0][0];

        $paymentid = substr($transactionid,3);

        $paymodel = new Payment();
        $payment = $paymodel->find($paymentid);
        $payment->transactioncode = $mpesacode;
        $payment->amount_received = $amount;
        $payment->channel = "MPESA";
        $payment->phone = $phone;
        if($payment->amount_received >= $payment->amount)
            $payment->status = 0;
        $payment->save();

        $packagemodel = new Subscription();
        $package = $packagemodel->find($payment->packageid);
        $customer = Customer::find($payment->user_id);

        //if(!is_null($package))
            //Log::info("package found of id".$package->id);

        if($payment->status == 0) {
            //Log::info("status == 0");
            $subscription = new UserSubscription();
            $subscription->user_id = $payment->user_id;
            $subscription->package_id = $payment->packageid;
            $subscription->ordernumber = $transactionid;
            $subscription->paymentchannel = $payment->channel;
            $subscription->transactionid = $payment->transactioncode;
            $subscription->startdate = date_create('now');
            $subscription->enddate = date_create('now')->add(new DateInterval('P' . $package->days . 'D'));
            $subscription->status = 1;
            if($package->institution == 1)
            {
                $students = $payment->institution_count;
                $maximum = $this->getPaidforCount($payment->packageid,$payment->amount_received);
                $subscription->persons = $students;
                $subscription->remainder = ($maximum - $students);
                $subscription->save();

                $this->updateStudentsExpiry($customer->institution_id,$subscription->enddate,$students);
                return;
            }
            $subscription->save();

            $details = UserPublisher::where('user_id',$subscription->user_id)->where('transactionid',$subscription->ordernumber)
                ->where('complete',0)->update(['complete'=> 1]);
            //Log::info("subscription saved");
            //return $details;
        }
        //return $payment;
    }

    public function checkSubscription(Request $request,$userid)
    {
        $subscription = new UserSubscription();
        $subscription = $subscription->orderby('user_subscriptions.id','DESC')->where('user_id',$userid)->where('status',1 )->where('enddate','>=',date_create('now'))
            ->leftJoin('subscriptions','subscriptions.id','=','user_subscriptions.package_id')
            ->first();

        if(is_null($subscription))
        {
            return response()->json(["message"=>"No valid subscriptions found"] , 400);
        }
        return $subscription;
    }

    public function getUserPayments(Request $request,$userid)
    {
        $payments = new Payment();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;
            $results = $payments->where('user_id',$userid)
                ->leftJoin('subscriptions','subscriptions.id','=','payments.packageid')
                ->select('payments.channel as method','payments.transactioncode as receipt','payments.phone as initiator','payments.amount_received as amount','subscriptions.subscription as package','payments.created_at as date')
                ->paginate($size)->items();

            $totalrecords = $payments->where('user_id',$userid)->count();
            $totalpages = ceil($totalrecords / $size);

            $data ["pagination"] = [
                "totalRecords" => $totalrecords,
                "currentRecords" => count($results),
                "pageCount" => $totalpages,
                "currentPage" => $page,
            ];

            $data ["rows"] = $results;

            return $data;
        }

        return $payments->where('user_id',$userid)
            ->leftJoin('subscriptions','subscriptions.id','=','payments.packageid')
            ->select('payments.channel as method','payments.transactioncode as receipt','payments.phone as initiator','payments.amount_received as amount','subscriptions.subscription as package','payments.created_at as date')
            ->get();
    }

    public function getUserSubscriptions(Request $request,$userid)
    {
        $usersubscriptions = new UserSubscription();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;
            $results = $usersubscriptions->where('user_id',$userid)
                ->leftJoin('subscriptions','subscriptions.id','=','user_subscriptions.package_id')
                ->select('user_subscriptions.ordernumber','user_subscriptions.transactionid as receipt','user_subscriptions.paymentchannel as method','subscriptions.subscription as package','user_subscriptions.startdate','user_subscriptions.enddate as expiry_date')
                ->paginate($size)->items();

            $totalrecords = $usersubscriptions->where('user_id',$userid)->count();
            $totalpages = ceil($totalrecords / $size);

            $data ["pagination"] = [
                "totalRecords" => $totalrecords,
                "currentRecords" => count($results),
                "pageCount" => $totalpages,
                "currentPage" => $page,
            ];

            $data ["rows"] = $results;

            return $data;
        }

        return $usersubscriptions->where('user_id',$userid)
            ->leftJoin('subscriptions','subscriptions.id','=','user_subscriptions.package_id')
            ->select('user_subscriptions.ordernumber','user_subscriptions.transactionid as receipt','user_subscriptions.paymentchannel as method','subscriptions.subscription as package','user_subscriptions.startdate','user_subscriptions.enddate as expiry_date')
            ->get();
    }

    // for debugging purpose
    public function listSubscriptions()
    {
        $subscription = new UserSubscription();
        return $subscription->all();
    }

    public function listPayments()
    {
        $payments = new Payment();
        return $payments->all();
    }
}

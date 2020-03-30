<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Subscription;
use App\Models\UserSubscription;
use App\Utils\Mpesa;
use DateInterval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentsController extends Controller
{
    //
    public function getSubscriptions()
    {
        $model  = new Subscription();

        return $model->get(['id','description','cost','days']);
    }

    public function startTransaction(Request $request)
    {
        $userid = $request->user_id;
        $packageid = $request->package_id;
        $phone = $request->mobile;
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
            $existing->amount = $package->cost;
            $existing->packageid = $package->id;
            $existing->save();

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
        $payment->amount = $package->cost;
        $payment->save();

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
            $subscription->save();
            //Log::info("subscription saved");
        }
        //return $payment;
    }

    public function checkSubscription(Request $request,$userid)
    {
        $subscription = new UserSubscription();
        $subscription = $subscription->orderby('id','DESC')->where('user_id',$userid)->where('status',1 )->where('enddate','>=',date_create('now'))->first();

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

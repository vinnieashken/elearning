<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Subscription;
use App\Models\UserSubscription;
use App\Utils\Mpesa;
use DateInterval;
use Illuminate\Http\Request;

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

        $packagemodel = new Subscription();
        $package = $packagemodel->find((int)$packageid);

        $payment = new Payment();
        $existing = $payment->where('user_id',$userid)->where('status',1)->first();

        //return $existing;

        if(!is_null($existing))
        {
            $existing->amount = $package->cost;
            $existing->packageid = $package->id;
            $existing->save();

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
        $payment->phone = $phone;
        if($payment->amount_received > $payment->amount)
            $payment->status = 0;
        $payment->save();

        $packagemodel = new Subscription();
        $package = $packagemodel->find($payment->packageid);

        if($payment->status !== 0) {
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
        }
        //return $payment;
    }

    public function checkSubscription(Request $request,$userid)
    {
        $subscription = new UserSubscription();
        $subscription = $subscription->orderby('id','DESC')->where('user_id',$userid)->where('status',1 )->where('enddate','>',date_create('now'))->first();

        if(is_null($subscription))
        {
            return response()->json(["message"=>"No valid subscriptions found"] , 400);
        }
        return $subscription;
    }
}

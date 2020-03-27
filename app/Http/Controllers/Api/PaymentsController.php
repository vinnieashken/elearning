<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Subscription;
use App\Models\UserSubscription;
use App\Utils\MPesa;
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
        $package = $packagemodel->find($packageid);

        $payment = new Payment();
        $payment->user_id = $userid;
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

        $mpesa = new MPesa();
        //return url('api/payments/mpesa/callback');

        $mpesa->processRequest($amount,$phone,url('api/payments/mpesa/callback'));

    }

    public function mpesaCallback(Request $request)
    {

    }
}

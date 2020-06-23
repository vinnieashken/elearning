<?php

namespace App\Http\Controllers\Academy;

use App\Exceptions\ValidationException;
use App\Models\Academy\AcPackages;
use App\Models\Academy\AcSubscriptions;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AcSubscriptionsController extends Controller
{

    public function subscribe() {
        $package = AcPackages::query()->where('id', (int)request('plan_id'))->first();
        if (!$package) throw new ValidationException("Please select a valid plan");

        $subscription = new AcSubscriptions();
        $subscription->package()->associate($package);
        $subscription->user()->associate((int)request('user_id'));
//        $subscription->amount = $package->cost;
        $subscription->amount = 1;
        $subscription->payment_initiated_on = Carbon::now();
        $subscription->save();

        $subscription->payment_ref = 'AC'.$subscription->id;
        $subscription->save();
        $request = Http::post(
            'https://vas.standardmedia.co.ke/api/mpesa/stk',
            array(

                    "amount"=> $subscription->amount,
                    "msisdn"=> request('phone'),
                    "transaction_id"=> $subscription->payment_ref
            )
        );

        throw new ValidationException("".$request->status(), [$subscription, $request->json()]);
    }

    public function confirm() {
        Log::info(json_encode(request()->all()));
    }
}

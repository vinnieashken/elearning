<?php

namespace App\Http\Controllers\Academy;

use App\Exceptions\ValidationException;
use App\Models\Academy\AcPackages;
use App\Models\Academy\AcSubscriptions;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use function foo\func;

class AcSubscriptionsController extends Controller
{

    public function subscription() {
        $active = AcSubscriptions::query()
            ->whereDate('effective_until', '>=', Carbon::now())
            ->whereHas('user', function ($q) {
                if (request()->has('user_id'))
                    $q->where('id', request('user_id'));
//                if (request()->has('user_ref'))
//                    $q->where('user_id', request('user_ref'));
                return $q;
            })
            ->first();

        if (!$active)
            throw new ValidationException("User does not have an active subscription");
        return response()->json($active);
    }

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
        Log::info('testing');
        if ($request->successful())
            return response()->json($subscription);

        throw new ValidationException("An unspecified error has occurred. Kindly contact Standard Digital for assistance", [$subscription, $request->json()]);
    }

    public function confirm() {
        Log::info(json_encode(request()->all()));
        $now = new Carbon();
        $subscription = AcSubscriptions::query()->where('payment_ref', request('transaction'))->first();

        $subscription->effective_from = Carbon::now();
        $subscription->effective_until = Carbon::now()->addDays((int)$subscription->package->days);
        $subscription->receipt_no = request('mpesa_code');
        $subscription->payment_completed_on = $now;
        $subscription->save();

        return response()->json(['message'=> 'Payment recorded successfully.']);
    }
}

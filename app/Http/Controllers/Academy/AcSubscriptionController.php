<?php

namespace App\Http\Controllers\Academy;

use App\Exceptions\ValidationException;
use App\Models\Academy\AcSubscription;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AcSubscriptionController extends Controller
{
    public function get($id) {
        $subscription = AcSubscription::query()->where('id', $id)->first();
        if (!$subscription)
            throw new ValidationException("Subscription not found");

        return response()->json($subscription);
    }

    public function filter() {
        $query = AcSubscription::query();

        if (count($query->get()) <= 0 )
            $this->seed();
        return response()->json($query->get());
    }

    public function seed() {
        $subscription = new AcSubscription();
        $subscription->name = 'Weekly';
        $subscription->days = 7;
        $subscription->cost = 70;
        $subscription->description = '';
        $subscription->save();
        $subscription = new AcSubscription();
        $subscription->name = 'Monthly';
        $subscription->days = 30;
        $subscription->cost = 300;
        $subscription->description = '';
        $subscription->save();
        $subscription = new AcSubscription();
        $subscription->name = 'Premium';
        $subscription->days = 365;
        $subscription->cost = 3600;
        $subscription->description = '';
        $subscription->save();
    }
}

<?php

namespace App\Http\Controllers\Academy;

use App\Exceptions\ValidationException;
use App\Models\Academy\AcPackages;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AcPackagesController extends Controller
{
    public function get($id) {
        $subscription = AcPackages::query()->where('id', $id)->first();
        if (!$subscription)
            throw new ValidationException("Subscription not found");

        return response()->json($subscription);
    }

    public function filter() {
        $query = AcPackages::query();

        if (count($query->get()) <= 0 )
            $this->seed();
        return response()->json($query->get());
    }

    public function seed() {
        $subscription = new AcPackages();
        $subscription->name = 'Weekly';
        $subscription->days = 7;
        $subscription->cost = 70;
        $subscription->description = '';
        $subscription->save();
        $subscription = new AcPackages();
        $subscription->name = 'Monthly';
        $subscription->days = 30;
        $subscription->cost = 300;
        $subscription->description = '';
        $subscription->save();
        $subscription = new AcPackages();
        $subscription->name = 'Premium';
        $subscription->days = 365;
        $subscription->cost = 3600;
        $subscription->description = '';
        $subscription->save();
    }
}

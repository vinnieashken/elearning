<?php


namespace App\Utils;


use App\Models\Customer;
use App\Models\Subscription;
use App\Models\UserPublisher;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\Log;

trait PaymentAssist
{
    public function getStudentsCount($institutionid)
    {
        return Customer::where('institution_id',$institutionid)->where('owner',0)->where('teacher',0)->whereNull('subscription_expiry')->orWhere('subscription_expiry','<',date_create('now'))->count();
    }

    public function getPaidForCount($packageid,$amount)
    {
        $packagemodel = new Subscription();
        $package = $packagemodel->find($packageid);
        $total = ($amount / $package->cost) * $package->persons;
        return $total;
    }

    public function updateStudentsExpiry($institutionid,$expiry,$limit)
    {
        Customer::where('institution_id',$institutionid)->where('owner',0)->where('teacher',0)->whereNull('subscription_expiry')->orWhere('subscription_expiry','<',date_create('now'))->limit($limit)->update(['subscription_expiry'=>$expiry]);
    }

    public function SubscribeStudent($institutionid,$studentid)
    {
        $owner = Customer::where('institution_id',$institutionid)->where('owner',1)->first();
        $subscription = new UserSubscription();
        $subscription = $subscription->orderby('user_subscriptions.id','DESC')->where('user_id',$owner->id)->where('status',1 )->where('enddate','>=',date_create('now'))->first();

        if(!is_null($subscription) && $subscription->remainder > 0)
        {
            $student = Customer::find($studentid);
            $subscription->persons = $subscription->persons + 1;
            $subscription->remainder = $subscription->remainder - 1;
            $subscription->save();
            $student->subscription_expiry = $subscription->enddate;
            $student->save();

            return ['message'=>"Successful update"];
        }
        return ['message'=>"No update done"];
    }

    public function storePublishers($publishers,$userid,$packageid,$amount,$transactionid)
    {
        foreach ($publishers as $item)
        {
            $publisher = new UserPublisher();
            $publisher->user_id = $userid;
            $publisher->transactionid = $transactionid;
            $publisher->publisher_id = $item;
            $publisher->package_id = $packageid;
            $publisher->amount = $amount;
            $publisher->save();
        }



    }

}

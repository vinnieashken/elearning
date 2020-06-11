<?php

namespace App\Models\Academy;

use Illuminate\Database\Eloquent\Model;

class AcSubscription extends Model
{
    protected $table = 'ac_subscriptions';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
    protected $fillable = ['name'];
}

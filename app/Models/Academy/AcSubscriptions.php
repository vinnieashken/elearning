<?php

namespace App\Models\Academy;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AcSubscriptions extends Model
{
    protected $table = 'ac_subscriptions';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
    protected $fillable = ['name'];

    public function package() :BelongsTo {
        return $this->belongsTo(AcPackages::class, 'package_id');
    }

    public function user() :BelongsTo {
        return $this->belongsTo(AcUsers::class, 'user_id');
    }
}

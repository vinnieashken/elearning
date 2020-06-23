<?php

namespace App\Models\Academy;

use Illuminate\Database\Eloquent\Model;

class AcUsers extends Model
{
    protected $table = 'ac_users';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
    protected $fillable = ['name'];
}

<?php

namespace App\Models\Academy;

use Illuminate\Database\Eloquent\Model;

class AcPackages extends Model
{
    protected $table = 'ac_packages';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
    protected $fillable = ['name'];
}

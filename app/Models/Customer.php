<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    //

    public function institution()
    {
        return $this->belongsTo('App\Models\Institution');
    }
}

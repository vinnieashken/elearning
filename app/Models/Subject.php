<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //

    public function level()
    {
        return $this->belongsTo("App\Models\Level","class_id");
    }
}

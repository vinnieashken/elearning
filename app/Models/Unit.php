<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    //

    public function lessons()
    {
        return $this->hasMany('App\Models\Lesson');
    }

    public function questions()
    {
        return $this->hasMany('App\Models\LessonQuestion');
    }
}

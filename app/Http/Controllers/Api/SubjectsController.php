<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Module;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectsController extends Controller
{
    //
    public function list()
    {
        $model = new Subject();
        return $model->all();
    }

    public function getClassSubjects($classid)
    {
        $model = new Subject();
        return $model->where('class_id',$classid)->get();
    }
}

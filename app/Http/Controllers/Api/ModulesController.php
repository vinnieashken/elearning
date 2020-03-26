<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Http\Request;

class ModulesController extends Controller
{
    //
    public function list()
    {
        $model = new Module();
        return $model->all();
    }

    public function getSubjectModules($subjectid)
    {
        $model = new Module();
        return $model->where('subject_id',$subjectid)->get();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    //
    public  function list()
    {

    }

    public function getModuleQuestions($moduleid)
    {
        $model = new Question();
        return $model->with('options')->where('module_id',$moduleid)->get();
    }
}

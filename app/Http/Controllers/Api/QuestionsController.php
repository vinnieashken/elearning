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

    public function getModuleQuestions(Request $request,$moduleid)
    {
        $model = new Question();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->with('options')->where('module_id',$moduleid)->paginate($size,['id','module_id','question'])->items();

            $totalrecords = $model->with('options')->where('module_id',$moduleid)->count();

            $totalpages = ceil($totalrecords / $size);

            $data ["pagination"] = [
                "totalRecords" => $totalrecords,
                "currentRecords" => count($results),
                "pageCount" => $totalpages,
                "currentPage" => $page,
            ];

            $data ["rows"] = $results;

            return $data;
        }
        return $model->with('options')->where('module_id',$moduleid)->get(['id','module_id','question']);
    }
}

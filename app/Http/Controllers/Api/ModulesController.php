<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Http\Request;

class ModulesController extends Controller
{
    //
    public function list(Request $request)
    {
        $model = new Module();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->paginate($size,['id','subject_id','module'])->items();

            $totalrecords = $model->count();
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
        return $model->all();
    }

    public function getSubjectModules(Request $request,$subjectid)
    {
        $model = new Module();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->where('subject_id',$subjectid)->paginate($size,['id','subject_id','module'])->items();

            $totalrecords = $model->where('subject_id',$subjectid)->count();
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
        return $model->where('subject_id',$subjectid)->get(['id','subject_id','module']);
    }
}

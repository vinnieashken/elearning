<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Module;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectsController extends Controller
{
    //
    public function list(Request $request)
    {
        $model = new Subject();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->paginate($size,['id','class_id','subject'])->items();

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
        return $model->get(['id','class_id','subject']);
    }

    public function getClassSubjects(Request $request, $classid)
    {
        $model = new Subject();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->where('class_id',$classid)->paginate($size,['id','class_id','subject'])->items();

            $totalrecords = $model->where('class_id',$classid)->count();
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
        return $model->where('class_id',$classid)->get(['id','class_id','subject']);
    }
}

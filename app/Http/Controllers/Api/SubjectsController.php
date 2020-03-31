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

            $results =  $model->leftJoin('classes','subjects.class_id','=','classes.id')
                ->select('subjects.id','subjects.class_id','subjects.subject','classes.class')->paginate($size)->items();

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
        return $model->leftJoin('classes','subjects.class_id','=','classes.id')
            ->select('subjects.id','subjects.class_id','subjects.subject','classes.class')->get();
    }

    public function getClassSubjects(Request $request, $classid)
    {
        $model = new Subject();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->where('class_id',$classid)->where('class_id',$classid)->leftJoin('classes','subjects.class_id','=','classes.id')
                ->select('subjects.id','subjects.class_id','subjects.subject','subjects.thumburl','classes.class')->paginate($size)->items();

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
        return $model->where('class_id',$classid)->leftJoin('classes','subjects.class_id','=','classes.id')
            ->select('subjects.id','subjects.class_id','subjects.subject','subjects.thumburl','classes.class')->get();
    }
}

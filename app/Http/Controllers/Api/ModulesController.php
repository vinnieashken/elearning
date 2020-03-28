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

            $results =  $model->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->select('modules.id','modules.module','modules.subject_id','subjects.subject','classes.class')->paginate($size)->items();

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
        return $model->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->select('modules.id','modules.module','modules.subject_id','subjects.subject','classes.class')->get();
    }

    public function getSubjectModules(Request $request,$subjectid)
    {
        $model = new Module();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->where('subject_id',$subjectid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->select('modules.id','modules.module','modules.subject_id','subjects.subject','classes.class')->paginate($size)->items();

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
        return $model->where('subject_id',$subjectid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->select('modules.id','modules.module','modules.subject_id','subjects.subject','classes.class')->get();
    }
}

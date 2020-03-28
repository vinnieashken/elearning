<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AnswerSheet;
use App\Models\Module;
use App\Models\Question;
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

    public function getUserModuleAnswers(Request $request,$moduleid,$userid)
    {
        $model = new AnswerSheet();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->where('module_id',$moduleid)->where('user_id',$userid)
                ->leftJoin('answers','answers.question_id','=','user_answers.question_id')
                ->select('user_answers.question_id','user_answers.option_id as user_option','answers.option_id as answer')->paginate($size)->items();

            $totalrecords = $model->where('user_id',$userid)->where('module_id',$moduleid)->count();

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

        return $model->where('module_id',$moduleid)->where('user_id',$userid)
            ->leftJoin('answers','answers.question_id','=','user_answers.question_id')
            ->select('user_answers.question_id','user_answers.option_id as user_option','answers.option_id as answer')->get();
    }

    public function getUserModuleMarks(Request $request,$moduleid,$userid)
    {
        $model = new AnswerSheet();
        $qmodel = new Question();
        $modulemodel = new Module();

        $module = $modulemodel->where('id',$moduleid)->first();

        $totalquestions = $qmodel->where('module_id',$moduleid)->count();
        $score = 0;

        $results = $model->where('module_id',$moduleid)->where('user_id',$userid)
            ->leftJoin('answers','answers.question_id','=','user_answers.question_id')
            ->select('user_answers.user_id','user_answers.question_id','user_answers.option_id as user_option','answers.option_id as answer')->get();
        foreach ($results as $result)
        {
            if($result->user_option == $result->answer)
                $score = $score + 1;
        }

        $data = [
            "moduleid" => (!is_null($module)  ? $module->id :''),
            "Module" => (!is_null($module)  ? $module->module :''),
            "Score" => $score,
            "Questions" => $totalquestions,
            "Percentage" => (($score / $totalquestions) * 100)
        ];

        return $data;
    }

    public function getUserModules(Request $request,$userid)
    {
        $sheetsmodel = new AnswerSheet();
        $size = 10;
        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results = $sheetsmodel->where('user_id',$userid)->distinct('module_id')->paginate($size,['module_id'])->items();

            $totalrecords = $sheetsmodel->where('user_id',$userid)->distinct('module_id')->count();
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

        $sheets = $sheetsmodel->where('user_id',$userid)->distinct('module_id')->get(['module_id']);

        return $sheets;
    }

}

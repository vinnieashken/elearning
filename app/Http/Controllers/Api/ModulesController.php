<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ResultSent;
use App\Models\AnswerSheet;
use App\Models\Customer;
use App\Models\Module;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

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
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class')->paginate($size)->items();

            $totalrecords = $model->count();
            $totalpages = ceil($totalrecords / $size);

            if($request->has('institutionid'))
            {
                $results =  $model->where('institution_id',$request->institutionid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class')->paginate($size)->items();
                $totalrecords = $model->where('institution_id',$request->institutionid)->count();
                $totalpages = ceil($totalrecords / $size);
            }

            $data ["pagination"] = [
                "totalRecords" => $totalrecords,
                "currentRecords" => count($results),
                "pageCount" => $totalpages,
                "currentPage" => $page,
            ];

            $temp = [];

            if($request->has('userid'))
            {
                $usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
                foreach ($results as $result)
                {
                    $result['done'] = false;

                    foreach ($usermodules as $usermodule)
                    {
                        if($result->id === $usermodule->module_id)
                        {
                            $result['done'] = true;
                        }
                    }
                    array_push($temp,$result);
                }
                $data ["rows"] = $temp;
            }
            else
                $data ["rows"] = $results;

            return $data;
        }

        $results = $model->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->leftJoin('institutions','modules.institution_id','=','institutions.id')
            ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class')->get();

        if($request->has('institutionid'))
        {
            $results = $model->where('institution_id',$request->institutionid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class')->get();
        }

        $data = [];
        if($request->has('userid'))
        {
            $usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();


            foreach ($results as $result)
            {
                $result['done'] = false;

                foreach ($usermodules as $usermodule)
                {

                    if($result->id == $usermodule->module_id)
                    {
                        $result['done'] = true;
                    }
                }

                array_push($data,$result);
            }
        }
        else
            $data = $results;

        return $data;
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
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class')->paginate($size)->items();

            $totalrecords = $model->where('subject_id',$subjectid)->count();
            $totalpages = ceil($totalrecords / $size);

            $data ["pagination"] = [
                "totalRecords" => $totalrecords,
                "currentRecords" => count($results),
                "pageCount" => $totalpages,
                "currentPage" => $page,
            ];
            $temp = [];

            if($request->has('userid'))
            {
                $usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
                foreach ($results as $result)
                {
                    $result['done'] = false;

                    foreach ($usermodules as $usermodule)
                    {
                        if($result->id === $usermodule->module_id)
                        {
                            $result['done'] = true;
                        }
                    }
                    array_push($temp,$result);
                }
                $data ["rows"] = $temp;
            }
            else
                $data ["rows"] = $results;

            return $data;
        }

        $results = $model->where('subject_id',$subjectid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->leftJoin('institutions','modules.institution_id','=','institutions.id')
            ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class')->get();
        $data = [];
        if($request->has('userid'))
        {
            $usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
            foreach ($results as $result)
            {
                $result['done'] = false;

                foreach ($usermodules as $usermodule)
                {
                    if($result->id === $usermodule->module_id)
                    {
                        $result['done'] = true;
                    }

                }
                array_push($data,$result);
            }
        }
        else
            $data = $results;

        return $data;
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

        if($results->isEmpty())
        {
            return response()->json(["message"=> "Test not taken"] , 400);
        }
        foreach ($results as $result)
        {
            if($result->user_option == $result->answer)
                $score = $score + 1;
        }

        $name = "";
        $user = Customer::where('user_id',$userid)->first();
        if(!is_null($user))
            $name = $user->name;

        $data = [
            "moduleid" => (!is_null($module)  ? $module->id :''),
            "Name" => $name,
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

            $results = $sheetsmodel->where('user_id',$userid)->distinct('module_id')
                ->leftJoin('modules','modules.id','=','user_answers.module_id')
                ->leftJoin('subjects','subjects.id','=','modules.id')
                ->leftJoin('classes','classes.id','=','subjects.id')
                ->leftJoin('marks','marks.marks_module_id','=','modules.id')
                ->select('modules.id','modules.module','subjects.id as subject_id','subjects.subject','classes.id as class_id','classes.class','marks.score','marks.questions','marks.percentage')
                ->paginate($size)->items();


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

        $sheets = $sheetsmodel->where('user_id',$userid)->distinct('module_id')
            ->leftJoin('modules','modules.id','=','user_answers.module_id')
            ->leftJoin('subjects','subjects.id','=','modules.id')
            ->leftJoin('classes','classes.id','=','subjects.id')
            ->leftJoin('marks','marks.marks_module_id','=','modules.id')
            ->select('modules.id','modules.module','subjects.id as subject_id','subjects.subject','classes.id as class_id','classes.class','marks.score','marks.questions','marks.percentage')
            ->get();

        return $sheets;
    }

    public function mymodules($userid)
    {
        $usermodules = AnswerSheet::where('user_id',$userid)->select('module_id')->distinct()->get();
        return $usermodules;
    }

}

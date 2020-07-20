<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ResultSent;
use App\Models\AnswerSheet;
use App\Models\Choiceless;
use App\Models\Customer;
use App\Models\Marks;
use App\Models\Module;
use App\Models\Question;
use App\Models\Subject;
use GuzzleHttp\Client;
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

            $results =  $model->where('choices',1)
                ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

            $totalrecords = $model->count();

            if($request->has('search'))
            {
                $query = $request->search;

                $results =  $model->where('choices',1)
                    ->where('modules.module','like','%'.$query.'%')
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('modules.module','like','%'.$query.'%')->count();
            }
            if($request->has('class_id'))
            {
                $class = $request->class_id;

                $results =  $model->where('choices',1)->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('choices',1)->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')->count();
            }
            if($request->has('search') && $request->has('class_id') ) {
                $query = $request->search;
                $class = $request->class_id;

                $results =  $model->where('choices', 1)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('choices',1)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->count();
            }


            //$totalrecords = $model->count();
            $totalpages = ceil($totalrecords / $size);

            if($request->has('institutionid'))
            {
                $results =  $model->where('choices',1)->where('institution_id',$request->institutionid)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('choices',1)->where('institution_id',$request->institutionid)->count();

                if($request->has('search'))
                {
                    $query = $request->search;
                    $results = $model->where('choices',1)->where('institution_id', $request->institutionid)->where('modules.module','like','%'.$query.'%')
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')
                        ->leftJoin('institutions', 'modules.institution_id', '=', 'institutions.id')
                        ->select('modules.id', 'modules.module', 'modules.subject_id', 'modules.institution_id', 'institutions.name as institution_name', 'subjects.subject', 'classes.class', 'classes.id as class_id', 'modules.status', 'modules.created_at as date')->paginate($size)->items();

                    $totalrecords = $model->where('choices',1)->where('institution_id',$request->institutionid)
                        ->where('modules.module','like','%'.$query.'%')
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')->count();
                }

                if($request->has('class_id'))
                {
                    $class = $request->class_id;
                    $results = $model->where('choices',1)->where('institution_id', $request->institutionid)->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')
                        ->leftJoin('institutions', 'modules.institution_id', '=', 'institutions.id')
                        ->select('modules.id', 'modules.module', 'modules.subject_id', 'modules.institution_id', 'institutions.name as institution_name', 'subjects.subject', 'classes.class', 'classes.id as class_id', 'modules.status', 'modules.created_at as date')->paginate($size)->items();

                    $totalrecords = $model->where('choices',1)->where('institution_id',$request->institutionid)->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')->count();
                }

                if($request->has('search') && $request->has('class_id') ) {
                    $query = $request->search;
                    $class = $request->class_id;

                    $results = $model->where('choices',1)->where('institution_id', $request->institutionid)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')
                        ->leftJoin('institutions', 'modules.institution_id', '=', 'institutions.id')
                        ->select('modules.id', 'modules.module', 'modules.subject_id', 'modules.institution_id', 'institutions.name as institution_name', 'subjects.subject', 'classes.class', 'classes.id as class_id', 'modules.status', 'modules.created_at as date')->paginate($size)->items();

                    $totalrecords = $model->where('choices',1)->where('institution_id',$request->institutionid)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')->count();
                }

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

        //no pagination
        $results = $model->where('choices',1)->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->leftJoin('institutions','modules.institution_id','=','institutions.id')
            ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();

        if($request->has('search'))
        {
            $query = $request->search;
            $results = $model->where('choices',1)->where('modules.module','like','%'.$query.'%')->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        }

        if($request->has('class_id'))
        {
            $class = $request->class_id;

            $results = $model->where('choices',1)->where('classes.id',$class)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        }

        if($request->has('search') && $request->has('class_id') )
        {
            $query = $request->search;
            $class = $request->class_id;

            $results = $model->where('choices',1)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        }

        if($request->has('institutionid'))
        {
            $results = $model->where('choices',1)->where('institution_id',$request->institutionid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();

            if($request->has('search'))
            {
                $query = $request->search;
                $results = $model->where('choices',1)->where('institution_id',$request->institutionid)->where('modules.module','like','%'.$query.'%')
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
            }

            if($request->has('class_id'))
            {
                $class = $request->class_id;
                $results = $model->where('choices',1)->where('institution_id',$request->institutionid)->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
            }

            if($request->has('search') && $request->has('class_id') )
            {
                $query = $request->search;
                $class = $request->class_id;

                $results = $model->where('choices',1)->where('institution_id',$request->institutionid)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
            }

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
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

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
                $choiceless = Choiceless::where('user_id',$request->userid)->select('module_id')->distinct()->get();
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

                    foreach($choiceless as $usermodule)
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
            ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        $data = [];
        if($request->has('userid'))
        {
            $usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
            $choiceless = Choiceless::where('user_id',$request->userid)->select('module_id')->distinct()->get();
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

                foreach($choiceless as $usermodule)
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

    public function getModulesBySubjectName(Request $request,$subjectname)
    {
        $model = new Module();

        $subjects = Subject::where('subject','like','%'.$subjectname.'%')->pluck('id');

        //return $subjects;

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->whereIn('subject_id',$subjects)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

            $totalrecords = $model->whereIn('subject_id',$subjects)->count();
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
                $choiceless = Choiceless::where('user_id',$request->userid)->select('module_id')->distinct()->get();
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

                    foreach($choiceless as $usermodule)
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

        $results = $model->whereIn('subject_id',$subjects)->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->leftJoin('institutions','modules.institution_id','=','institutions.id')
            ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        $data = [];
        if($request->has('userid'))
        {
            $usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
            $choiceless = Choiceless::where('user_id',$request->userid)->select('module_id')->distinct()->get();

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

                foreach($choiceless as $usermodule)
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
                ->leftJoin('subjects','subjects.id','=','modules.subject_id')
                ->leftJoin('classes','classes.id','=','subjects.class_id')
                ->leftJoin('marks','marks.marks_module_id','=','modules.id')
                ->select('modules.id','modules.module','user_answers.created_at as date','subjects.id as subject_id','subjects.subject','classes.id as class_id','classes.class','marks.score','marks.questions','marks.percentage')
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

//            foreach ($results as $module)
//            {
//                $this->RedoMarks($module->id,$userid);
//            }

            return $data;
        }

        $sheets = $sheetsmodel->where('user_id',$userid)->distinct('module_id')
            ->leftJoin('modules','modules.id','=','user_answers.module_id')
            ->leftJoin('subjects','subjects.id','=','modules.subject_id')
            ->leftJoin('classes','classes.id','=','subjects.class_id')
            ->leftJoin('marks','marks.marks_module_id','=','modules.id')
            ->select('modules.id','modules.module','user_answers.created_at as date','subjects.id as subject_id','subjects.subject','classes.id as class_id','classes.class','marks.score','marks.questions','marks.percentage')
            ->get();

        $choiceless = Choiceless::where('user_id',$request->userid)->distinct('module_id')
            ->leftJoin('modules','modules.id','=','user_answers.module_id')
            ->leftJoin('subjects','subjects.id','=','modules.subject_id')
            ->leftJoin('classes','classes.id','=','subjects.class_id')
            ->select('modules.id','modules.module','user_answers_choiceless.created_at as date','subjects.id as subject_id','subjects.subject','classes.id as class_id','classes.class')

            ->get();

        foreach ($choiceless as $item)
        {
            $sheets->push($item);

        }
//        foreach ($sheets as $module)
//        {
//            $this->RedoMarks($module->id,$userid);
//        }

        return $sheets;
    }

    public function getModuleStudents($moduleid)
    {
        $sheetsmodel = new AnswerSheet();
        $users = $sheetsmodel->where('module_id',$moduleid)->where('marks.marks_module_id',$moduleid)->distinct('user_id')
            ->leftJoin('customers','customers.id','=','user_answers.user_id')
            ->leftJoin('marks','marks.marks_user_id','=','customers.id')
            ->select('customers.id','customers.user_id','customers.name','customers.email','customers.institution_id','customers.owner','customers.teacher','customers.adm_no','customers.login_code','customers.teacher_id','customers.publisher','customers.active',
                'marks.score','marks.percentage','marks.questions')
            ->get();

        return $users;
    }

    public function nochoicesList(Request $request)
    {
        $model = new Module();

        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->where('choices',0)
                ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

            $totalrecords = $model->count();

            if($request->has('search'))
            {
                $query = $request->search;

                $results =  $model->where('choices',0)
                    ->where('modules.module','like','%'.$query.'%')
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('modules.module','like','%'.$query.'%')->count();
            }
            if($request->has('class_id'))
            {
                $class = $request->class_id;

                $results =  $model->where('choices',0)->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('choices',0)->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')->count();
            }
            if($request->has('search') && $request->has('class_id') ) {
                $query = $request->search;
                $class = $request->class_id;

                $results =  $model->where('choices', 0)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('choices',0)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->count();
            }


            //$totalrecords = $model->count();
            $totalpages = ceil($totalrecords / $size);

            if($request->has('institutionid'))
            {
                $results =  $model->where('choices', 0)->where('institution_id',$request->institutionid)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->paginate($size)->items();

                $totalrecords = $model->where('choices', 0)->where('institution_id',$request->institutionid)->count();

                if($request->has('search'))
                {
                    $query = $request->search;
                    $results = $model->where('choices', 0)->where('institution_id', $request->institutionid)->where('modules.module','like','%'.$query.'%')
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')
                        ->leftJoin('institutions', 'modules.institution_id', '=', 'institutions.id')
                        ->select('modules.id', 'modules.module', 'modules.subject_id', 'modules.institution_id', 'institutions.name as institution_name', 'subjects.subject', 'classes.class', 'classes.id as class_id', 'modules.status', 'modules.created_at as date')->paginate($size)->items();

                    $totalrecords = $model->where('choices', 0)->where('institution_id',$request->institutionid)
                        ->where('modules.module','like','%'.$query.'%')
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')->count();
                }

                if($request->has('class_id'))
                {
                    $class = $request->class_id;
                    $results = $model->where('choices', 0)->where('institution_id', $request->institutionid)->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')
                        ->leftJoin('institutions', 'modules.institution_id', '=', 'institutions.id')
                        ->select('modules.id', 'modules.module', 'modules.subject_id', 'modules.institution_id', 'institutions.name as institution_name', 'subjects.subject', 'classes.class', 'classes.id as class_id', 'modules.status', 'modules.created_at as date')->paginate($size)->items();

                    $totalrecords = $model->where('choices', 0)->where('institution_id',$request->institutionid)->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')->count();
                }

                if($request->has('search') && $request->has('class_id') ) {
                    $query = $request->search;
                    $class = $request->class_id;

                    $results = $model->where('choices', 0)->where('institution_id', $request->institutionid)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')
                        ->leftJoin('institutions', 'modules.institution_id', '=', 'institutions.id')
                        ->select('modules.id', 'modules.module', 'modules.subject_id', 'modules.institution_id', 'institutions.name as institution_name', 'subjects.subject', 'classes.class', 'classes.id as class_id', 'modules.status', 'modules.created_at as date')->paginate($size)->items();

                    $totalrecords = $model->where('choices', 0)->where('institution_id',$request->institutionid)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                        ->leftJoin('subjects', 'modules.subject_id', '=', 'subjects.id')
                        ->leftJoin('classes', 'subjects.class_id', '=', 'classes.id')->count();
                }

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
                //$usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
                $choiceless = Choiceless::where('user_id',$request->userid)->select('module_id')->distinct()->get();
                foreach ($results as $result)
                {
                    $result['done'] = false;

                    foreach($choiceless as $usermodule)
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

        //no pagination
        $results = $model->where('choices', 0)->leftJoin('subjects','modules.subject_id','=','subjects.id')
            ->leftJoin('classes','subjects.class_id','=','classes.id')
            ->leftJoin('institutions','modules.institution_id','=','institutions.id')
            ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();

        if($request->has('search'))
        {
            $query = $request->search;
            $results = $model->where('choices', 0)->where('modules.module','like','%'.$query.'%')->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        }

        if($request->has('class_id'))
        {
            $class = $request->class_id;

            $results = $model->where('choices', 0)->where('classes.id',$class)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        }

        if($request->has('search') && $request->has('class_id') )
        {
            $query = $request->search;
            $class = $request->class_id;

            $results = $model->where('choices', 0)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.institution_id','modules.subject_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
        }

        if($request->has('institutionid'))
        {
            $results = $model->where('choices', 0)->where('institution_id',$request->institutionid)->leftJoin('subjects','modules.subject_id','=','subjects.id')
                ->leftJoin('classes','subjects.class_id','=','classes.id')
                ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();

            if($request->has('search'))
            {
                $query = $request->search;
                $results = $model->where('choices', 0)->where('institution_id',$request->institutionid)->where('modules.module','like','%'.$query.'%')
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
            }

            if($request->has('class_id'))
            {
                $class = $request->class_id;
                $results = $model->where('choices', 0)->where('institution_id',$request->institutionid)->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
            }

            if($request->has('search') && $request->has('class_id') )
            {
                $query = $request->search;
                $class = $request->class_id;

                $results = $model->where('choices', 0)->where('institution_id',$request->institutionid)->where('modules.module','like','%'.$query.'%')->where('classes.id',$class)
                    ->leftJoin('subjects','modules.subject_id','=','subjects.id')
                    ->leftJoin('classes','subjects.class_id','=','classes.id')
                    ->leftJoin('institutions','modules.institution_id','=','institutions.id')
                    ->select('modules.id','modules.module','modules.subject_id','modules.institution_id','institutions.name as institution_name','subjects.subject','classes.class','classes.id as class_id','modules.status','modules.created_at as date')->get();
            }

        }

        $data = [];
        if($request->has('userid'))
        {
            //$usermodules = AnswerSheet::where('user_id',$request->userid)->select('module_id')->distinct()->get();
            $choiceless = Choiceless::where('user_id',$request->userid)->select('module_id')->distinct()->get();
            foreach ($results as $result)
            {
                $result['done'] = false;

                foreach($choiceless as $usermodule)
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

    public function mymodules($userid)
    {
        $usermodules = AnswerSheet::where('user_id',$userid)->select('module_id')->distinct()->get();
        return $usermodules;
    }

    public function RedoMarks($moduleid,$userid)
    {

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json','appkey'=>'ELE-2020-XCZ3' ],'verify'=> base_path('/cacert.pem'),'http_errors'=>false]);
        try {

            $path = url('/api/modules/'.$moduleid.'/marks/user/'.$userid);
            $response = $client->request('GET', $path);

        }catch (Exception $e)
        {

        }

        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $result = json_decode($body);

        if(! is_null($result))
        {
            $marks = new Marks();
            $existing = $marks->where('marks_user_id',$userid)->where('marks_module_id',$moduleid)->first();
            if(!is_null($existing))
            {

            }
            else {
                $marks->marks_module_id = $moduleid;
                $marks->marks_user_id = $userid;
                $marks->score = $result->Score;
                $marks->questions = $result->Questions;
                $marks->percentage = $result->Percentage;
                $marks->save();
            }
        }

    }

    public function debug($userid)
    {
        foreach(Customer::get() as $customer) {
            $client = new Client(['headers' => ['Content-Type' => 'application/json', 'appkey' => 'ELE-2020-XCZ3'], 'verify' => base_path('/cacert.pem'), 'http_errors' => false]);
            try {

                $path = url('api/modules/user/' . $customer->id);
                $response = $client->request('GET', $path);

            } catch (Exception $e) {

            }
        }
        return ['message'=>'done'];
    }

}

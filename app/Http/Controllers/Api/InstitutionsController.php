<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Customer;
use App\Models\Module;
use App\Models\Option;
use App\Models\Question;
use App\Models\UserPublisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class InstitutionsController extends Controller
{
    //
    public function studentsList(Request $request,$id)
    {
        $list = new Customer();
        if($request->has('size') && $request->has('page')) {
            $size = $request->size;
            $page = $request->page;

            $results = $list->where('institution_id',$id)->where('teacher',0)->paginate($size)->items();

            $totalrecords = $list->where('institution_id',$id)->where('teacher',0)->count();

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

        $students = $list->where('institution_id',$id)->where('teacher',0)->get();

        return $students;
    }

    public function teachersList(Request $request,$id)
    {
        $list = new Customer();
        if($request->has('size') && $request->has('page')) {
            $size = $request->size;
            $page = $request->page;

            $results = $list->where('institution_id',$id)->where('teacher',1)->paginate($size)->items();

            $totalrecords = $list->where('institution_id',$id)->where('teacher',1)->count();

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

        $students = $list->where('institution_id',$id)->where('teacher',1)->get();

        return $students;
    }

    public function editStudent(Request $request)
    {
        $id = $request->id;
        $institution = $request->institutionid;
        //$teacher = $request->teacherid;
        $name = $request->name;
        $adm_no = $request->adm_no;
        $email = $request->email;

        $convert = 0;
        if($request->has('convert'))
            $convert = $request->convert;

        $student = new Customer();
        $existing = $student->where('id',$request->id)->first();

        if(is_null($id) || is_null($institution) || is_null($name))
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

        if(is_null($existing))
        {
            return response()->json(['message'=>'Record not found','data'=> $request->all()] , 400);
        }

        //$existing->teacher_id = $teacher;
        $existing->email = $email;
        $existing->name = $name;
        if($request->has('adm_no'))
            $existing->adm_no = $adm_no;

        $existing->login_code = $existing->institution_id.'-'.$existing->adm_no;
        if($convert == 1)
            $existing->teacher = 1;

        $existing->save();

        return $existing;
    }

    public function editTeacher(Request $request)
    {
        $id = $request->id;
        $institution = $request->institutionid;
        $name = $request->name;
        $email = $request->email;

        $teacher = new Customer();
        $existing = $teacher->where('id',$request->id)->first();
        if(is_null($id) || is_null($institution)  || is_null($name) )
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

        if(is_null($existing))
        {
            return response()->json(['message'=>'Record not found','data'=> $request->all()] , 400);
        }

        $existing->institution_id = $institution;
        $existing->name = $name;
        $existing->save();
        return $existing;
    }

    public function addModule(Request $request)
    {
        $subjectid = $request->subjectid;
        $modulename = $request->module;
        $institutionid = $request->institutionid;

        $module = new Module();
        $module->subject_id = $subjectid;
        $module->module = $modulename;
        $module->institution_id = $institutionid;
        $module->save();

        return $module;
    }

    public function editModule(Request $request)
    {
        $id = $request->id;
        $subjectid = $request->subjectid;
        $modulename = $request->module;
        $institutionid = $request->institutionid;

        $module = new Module();
        $existing = $module->where('id',$id)->first();

        if(is_null($existing))
        {
            return response()->json(['message'=>'Record not found','data'=> $request->all()] , 400);
        }

        $existing->subject_id = $subjectid;
        $existing->module = $modulename;
        $existing->institution_id = $institutionid;
        $existing->save();

        return $existing;
    }

    public function addModuleQuestions(Request $request)
    {
        $module = $request->moduleid;
        $questions = $request->questions;

        foreach ($questions as $question)
        {

            $questionmodel = new Question();
            $questionmodel->module_id = $module;
            $questionmodel->question = $question['question'];
            $questionmodel->listorder = 1;
            $questionmodel ->save();

            foreach ($question['options'] as $option)
            {
                $optionmodel = new Option();
                $optionmodel->question_id = $questionmodel->id;
                $optionmodel->option = $option;
                $optionmodel->save();

                if($question['answer'] === $option)
                {
                    $answer = new Answer();
                    $answer->question_id = $questionmodel->id;
                    $answer->option_id = $optionmodel->id;
                    $answer->save();
                }

            }
        }

        $questions = Question::orderBy('listorder','ASC')->with('options')->where('questions.module_id',$module)
            ->leftJoin('answers','answers.question_id','=','questions.id')
            ->select('questions.id','questions.module_id','questions.question','answers.option_id as answer')
            ->get();
        $data = [];
        $data['moduleid'] = $module;
        $data['questions'] = $questions;

        return $data;
    }

    public function addChoicelessModuleQuestions(Request $request)
    {
        $module = $request->moduleid;
        $questions = $request->questions;

        foreach ($questions as $question)
        {

            $questionmodel = new Question();
            $questionmodel->module_id = $module;
            $questionmodel->question = $question['question'];
            $questionmodel->listorder = 1;
            $questionmodel ->save();

            $optionmodel = new Option();
            $optionmodel->question_id = $questionmodel->id;
            $optionmodel->option = $question['answer'];
            $optionmodel->save();

        }

        $questions = Question::orderBy('listorder','ASC')->with('options')->where('questions.module_id',$module)
            //->leftJoin('answers','answers.question_id','=','questions.id')
            ->select('questions.id','questions.module_id','questions.question')
            ->get();
        $data = [];
        $data['moduleid'] = $module;
        $data['questions'] = $questions;

        return $data;
    }

    public function editModuleQuestions(Request $request)
    {
        $module = $request->moduleid;
        $questions = $request->questions;

        foreach ($questions as $question)
        {

            $questionmodel = new Question();
            $existing = $questionmodel->where('id',$question['id'])->first();
            $existing->question = $question['question'];
            $existing ->save();

            foreach ($question['options'] as $option)
            {
                $optionmodel = new Option();
                $existingoption = $optionmodel->where('id',$option['id'])->first();
                $existingoption->option = $option['option'];
                $existingoption->save();

                $answer = new Answer();
                $existinganswer = $answer->where('question_id',$existing->id)->first();
                $existinganswer->option_id = $question['answer'];
                $existinganswer->save();

            }
        }

        $questions = Question::orderBy('listorder','ASC')->with('options')->where('questions.module_id',$module)
            ->leftJoin('answers','answers.question_id','=','questions.id')
            ->select('questions.id','questions.module_id','questions.question','answers.option_id as answer')
            ->get();
        $data = [];
        $data['moduleid'] = $module;
        $data['questions'] = $questions;

        return $data;
    }

    public function getPublishers(Request $request)
    {
        $list = new Customer();
        if($request->has('size') && $request->has('page')) {
            $size = $request->size;
            $page = $request->page;

            $results = $list->where('publisher',1)->paginate($size)->items();

            $totalrecords = $list->where('publisher',1)->count();

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

        $students = $list->where('publisher',1)->get();

        return $students;
    }

    public function getPublishersPayments(Request $request,$id)
    {
        $payments = new UserPublisher();

        if($request->has('size') && $request->has('page')) {
            $size = $request->size;
            $page = $request->page;

            $results = $payments->where('publisher_id',$id)->where('complete', 1)->
            leftJoin('customers','user_publishers.user_id','=','customers.user_id')
                ->select('customers.name','user_publishers.transactionid','user_publishers.amount','user_publishers.created_at as date')->paginate($size)->items();

            $totalrecords = $payments->where('publisher_id',$id)->count();

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

        return $payments->where('publisher_id',$id)->
        leftJoin('customers','user_publishers.user_id','=','customers.user_id')
        ->select('customers.name','user_publishers.transactionid','user_publishers.amount','user_publishers.created_at as date')->get();
    }

}

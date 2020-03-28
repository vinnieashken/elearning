<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AnswerSheet;
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

            $results =  $model->with('options')->where('module_id',$moduleid)
                ->leftJoin('answers','answers.question_id','=','questions.id')
                ->select('questions.id','questions.module_id','questions.question','answers.option_id as answer')->paginate($size)->items();

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
        return $model->with('options')->where('module_id',$moduleid)
            ->leftJoin('answers','answers.question_id','=','questions.id')
            ->select('questions.id','questions.module_id','questions.question','answers.option_id as answer')->get();
    }

    public function saveUserAnswers(Request $request)
    {
        $data = $request->all();
        $moduleid = $data['moduleid'];
        $userid = $data['userid'];
        $answers = $data['answers'];


        foreach ($answers as $answer)
        {
               //echo $answer->questionid;
            $answerSheet = new AnswerSheet();
            $answerSheet->user_id = $userid;
            $answerSheet->module_id = $moduleid;
            $answerSheet->question_id = $answer['questionid'];
            $answerSheet->option_id = $answer['optionid'];
            $answerSheet->save();
        }

    }
}

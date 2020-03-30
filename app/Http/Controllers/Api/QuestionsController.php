<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AnswerSheet;
use App\Models\Marks;
use App\Models\Question;
use GuzzleHttp\Client;
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
        //$userid = $request->userid;

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
        return $model->with('options')->where('questions.module_id',$moduleid)
            ->leftJoin('answers','answers.question_id','=','questions.id')
            //->leftJoin('user_answers','user_answers.user_id','=','questions.id')
            ->select('questions.id','questions.module_id','questions.question','answers.option_id as answer')
            ->get();
    }

    public function saveUserAnswers(Request $request)
    {
        $data = $request->all();
        $moduleid = $data['moduleid'];
        $userid = $data['userid'];
        $answers = $data['answers'];


        foreach ($answers as $answer)
        {
            $answerSheet = new AnswerSheet();
            $exists = $answerSheet ->where('question_id',$answer['questionid'])->where('user_id',$userid)->where('module_id',$moduleid)->first();
            $answerSheet->user_id = $userid;
            $answerSheet->module_id = $moduleid;
            $answerSheet->question_id = $answer['questionid'];
            $answerSheet->option_id = $answer['optionid'];

            if(is_null($exists))
                $answerSheet->save();
            else{
                $exists->option_id = $answer['optionid'];
                $exists->save();
            }
        }

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> base_path('/cacert.pem'),'http_errors'=>false]);
        try {

            $path = url('/api/modules/'.$moduleid.'/marks/user/'.$userid);
            $response = $client->request('GET', $path);

        }catch (Exception $e)
        {

        }

        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $result = json_decode($body);

        $marks = new Marks();
        $existing = $marks->where('marks_user_id',$userid)->where('marks_module_id',$moduleid)->first();
        if(!is_null($existing))
        {

        }
        else {
            $marks->marks_module_id = $moduleid;
            $marks->marks_user_id = $userid;
            $marks->score = $result->Score;
            $marks->percentage = $result->Percentage;
            $marks->save();
        }

        return $body;

    }
}

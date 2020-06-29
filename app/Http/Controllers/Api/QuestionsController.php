<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Jobs\SendResultsEmail;
use App\Mail\ResultSent;
use App\Models\AnswerSheet;
use App\Models\Choiceless;
use App\Models\Customer;
use App\Models\Institution;
use App\Models\Level;
use App\Models\Marks;
use App\Models\Module;
use App\Models\Question;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class QuestionsController extends Controller
{
    //
    public  function list()
    {

    }

    public function getModuleQuestions(Request $request,$moduleid)
    {

        $institution = new Institution();

        $model = new Question();
        //$userid = $request->userid;
        $modulesmodel = new Module();
        $module = $modulesmodel->with('subject')->where('id',$moduleid)->first();
        $publisher = $institution->where('name','like','standard group')->first();

        if($module->institution_id !== NULL)
        {

            $publisher = $institution->find($module->institution_id);
        }
        $class = Level::find($module->subject->class_id);

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

        $results = $model->orderBy('listorder','ASC')->with('options')->where('questions.module_id',$moduleid)

            ->leftJoin('answers','answers.question_id','=','questions.id')
            //->leftJoin('user_answers','user_answers.user_id','=','questions.id')
            ->select('questions.id','questions.module_id','questions.question','answers.option_id as answer')
            ->get();
        $data = [
            'publisher' => $publisher,
            'id'=> $module->id,
            'class' => $class,
            'subject' => $module->subject,
            'choices' => $module->choices,
            'done' => false,
            'name'=> $module->module,
            'questions'=> $results,


        ];

        if($request->has('userid'))
        {
            $userid = $request->userid;
            $record = AnswerSheet::where('user_id',$userid)->where('module_id',$moduleid)->first();
            //$choiceless = Choiceless::orderBy('id','DESC')->where('user_id',$userid)->where('module_id',$moduleid)->first();
            if(!is_null($record))
            {
                $data['done'] = true;

            }

            $choiceless = Choiceless::where('user_id',$userid)->get();
            if(!is_null($choiceless))
            {
                $data['done'] = true;
                $data['lastquestion'] = $moduleid;
            }

        }
        return $data;
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

            //if(!is_numeric($answer['optionid']) )
                //continue;
            $answerSheet->question_id = $answer['questionid'];
            $answerSheet->option_id = $answer['optionid'];

            if(is_null($exists))
                $answerSheet->save();
            else{
                $exists->option_id = $answer['optionid'];
                $exists->save();
            }
        }

        //return $answers;

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

        //return $user;
        $user = Customer::where('user_id',$userid)->first();
        if(!is_null($user))
        {
            $result->email = $user->email;
            SendResultsEmail::dispatch($result);
        }

        //return (new ResultSent((object)$data))->render();

        return $body;

    }

    public function saveUserAnswerChoicelessperQuestion(Request $request)
    {
        $user_id = $request->userid;
        $module_id = $request->moduleid;
        $question_id = $request->questionid;
        $answer = $request->answer;
        $record = new Choiceless();

        $record->user_id = $user_id;
        $record->module_id = $module_id;
        $record->question_id = $question_id;
        $record->answer = $answer;

        $record->save();
    }
}

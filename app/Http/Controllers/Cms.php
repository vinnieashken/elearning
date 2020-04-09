<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Customer;
use App\Models\Module;
use App\Models\Level;
use App\Models\Option;
use App\Models\Question;
use App\Models\Subject;
use App\Models\Subscription;
use App\User;
use Illuminate\Http\Request;


class Cms extends Controller
    {
        public function __construct()
            {
                $this->middleware('auth');
            }
        public function index()
            {
                $exams      =   Module::count();
                $subjects   =   Subject::count();
                $users      =   User::whereNotNull('rights')->count();
                $customers  =   Customer::count();
                return view('cms.modules.dashboard',compact('exams','subjects','users','customers'));
            }
        public function question()
            {
                return view('cms.modules.setquestion');
            }
        public function modules()
            {
                return view('cms/modules/module');
            }
        public function addmodule(Request $request)
            {
                $validatedData = $request->validate([
                    'module'        =>  'required',
                    'subject'       =>  'required'
                ]);

                if($validatedData)
                    {
                        $module             =   new Module();
                        $module->module     =   $request->module;
                        $module->subject_id =   $request->subject;
                        $req                =   $module->save();
                        if($req)
                            {
                                return array('status'=>TRUE,'msg'=>'Module added successful','header'=>'Module');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Module addition failed','header'=>'Module');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function editmodule(Request $request)
            {
                $validatedData = $request->validate([
                    'module'        =>  'required',
                    'subject'       =>  'required'
                ]);

                if($validatedData)
                    {
                        $module             =   Module::find($request->id);
                        $module->module     =   $request->module;
                        $module->subject_id =   $request->subject;
                        $req                =   $module->save();
                        if($req)
                            {
                                return array('status'=>TRUE,'msg'=>'Module added successful','header'=>'Module');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Module addition failed','header'=>'Module');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function classes()
            {
                return view('cms/modules/classes');
            }
        public function addlevel(Request $request)
            {
                $validatedData = $request->validate([
                    'class'         =>  'required|unique:classes',
                ]);

                if($validatedData)
                    {
                        try
                            {

                                $level         =   new Level();
                                $level->class  =   $request->class;
                                $req           =   $level->save();
                                if($req)
                                    {
                                        return array('status'=>TRUE,'msg'=>'Class added successful','header'=>'Class');
                                    }
                                else
                                    {
                                        return array('status'=>False,'msg'=>'Class addition failed'.$level,'header'=>'Class');
                                    }
                            }
                        catch (\Illuminate\Database\QueryException $e)
                            {

                                echo $e->getMessage();
                            }
                        catch (\Exception $e)
                            {
                                echo $e->getMessage();
                            }


                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function editlevel(Request $request)
            {
                $validatedData = $request->validate([
                    'class'         =>  'required',
                ]);

                if($validatedData)
                    {
                        $level           =   Level::find($request->id);
                        $level->class    =   $request->class;
                        $req             =   $level->save();
                        if($req)
                            {
                                return array('status'=>TRUE,'msg'=>'Class added successful','header'=>'Class');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Class addition failed','header'=>'Class');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function subject()
            {
                return view('cms/modules/subject');
            }
        public function addsubject(Request $request)
            {
                $validatedData = $request->validate([
                    'class'         =>  'required',
                    'subject'       =>  'required'
                ]);

                if($validatedData)
                    {
                        $subject           =   new Subject();
                        $subject->subject  =   $request->subject;
                        $subject->class_id =   $request->class;
                        $req               =   $subject->save();
                        if($req)
                            {
                                return array('status'=>TRUE,'msg'=>'Subject added successful','header'=>'Subject');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Subject addition failed','header'=>'Subject');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function editsubject(Request $request)
            {
                $validatedData = $request->validate([
                    'class'         =>  'required',
                    'subject'       =>  'required'
                ]);

                if($validatedData)
                    {
                        $subject           =   Subject::find($request->id);
                        $subject->subject  =   $request->subject;
                        $subject->class_id =   $request->class;
                        $req               =   $subject->save();
                        if($req)
                            {
                                return array('status'=>TRUE,'msg'=>'Subject added successful','header'=>'Subject');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Subject addition failed','header'=>'Subject');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function getmodules(Request $request)
            {
                $option = "";
                $data   =   Subject::where('class_id',$request->class_id)->get();
                foreach($data as $value)
                    {
                        $option .= '<option value="'.$value->id.'">'.$value->subject.'</option>';
                    }
                echo $option;
            }
        public function choices(Request $request)
            {
                $choice = $ans = "";

                $size = (int)$request->choices + 65;
                for($i=65; $i<$size; $i++)
                    {

                        $choice .=   '<div class="form-group">
                                       <label class="control-label w-100" for="add-choice-'.chr($i).'">CHOICE '.chr($i).'</label>
                                        <textarea class="form-control ans-editor w-100" name="option['.chr($i).'][]" id="add-choice-'.chr($i).'">
                                        </textarea>
                                     </div
                                    ';
                        $ans   .=    '<div class="form-check form-check-inline">
                                        <label class="form-check-label mr-2" for="add-ans-'.chr($i).'">'.chr($i).'</label>
                                        <input class="form-check-input" type="radio" name="correctanswer" id="add-ans-'.chr($i).'" value="'.chr($i).'">

                                    </div>';
                    }
                $choice .=   '  <hr>
                                <div class="form-group mt-5">
                                    <label for="correct-ans">Correct Answer</label>
                                    <div id="correct-ans" class="d-flex justify-content-between flex-wrap">
                                        '.$ans.'
                                    </div>
                                </div>
                            ';
                return $choice;
            }
        public function questionanswers(Request $request)
            {
                $choice = $ans="";
                $i=65;
                $answer  = Answer::where('question_id',$request->question_id)->first();
                $choice .=  '<input type="hidden" name="correct_id" value="'.$answer->id.'" >';
                foreach(Option::where('question_id',$request->question_id)->get() as $value)
                    {
                        $t = ($answer->option_id == $value->id)?'checked':NULL;

                        $choice .=   '<div class="form-group">
                                       <label class="control-label w-100" for="edit-choice-'.chr($i).'">CHOICE '.chr($i).'</label>
                                        <textarea class="form-control ans-editor w-100" name="option['.$value->id.']" id="edit-choice-'.chr($i).'">
                                            '.str_replace(chr($i).') ','',$value->option).'
                                        </textarea>
                                     </div
                                    ';
                        $ans   .=    '<div class="form-check form-check-inline">
                                        <label class="form-check-label mr-2" for="edit-ans-'.chr($i).'">'.chr($i).'</label>
                                        <input class="form-check-input" type="radio" name="correctanswer" '.$t.' id="edit-ans-'.chr($i).'" value="'.$value->id.'">

                                    </div>';
                        $i++;
                    }
                $choice .=   '  <hr>
                                <div class="form-group mt-5">
                                    <label for="correct-ans">Correct Answer</label>
                                    <div id="correct-ans" >
                                        '.$ans.'
                                    </div>
                                </div>
                            ';
                return $choice;
            }
        public function addquestion(Request $request)
            {

                $validatedData = $request->validate([
                                                        'correctanswer'  =>  'required',
                                                        'question'       =>  'required',
                                                        'module'        =>   'required',
                                                        'option'        =>   'required'
                                                    ]);
                if($validatedData)
                    {
                        $question               =   new Question();
                        $question->listorder    =   $request->listorder;
                        $question->module_id    =   $request->module;
                        $question->question     =   $request->question;
                        $queststatus            =   $question->save();
                        if($queststatus)
                            {

                                foreach ($request->option as $key => $value)
                                    {
                                        $option                 =   new Option();
                                        $option->question_id    =   $question->id;
                                        $option->option         =   $key.') '.$value[0];
                                        $optstatus              =   $option->save();

                                        if($request->correctanswer == $key)
                                            {
                                                $correct                =   new Answer();
                                                $correct->question_id   =   $question->id;
                                                $correct->option_id     =   $option->id;
                                                $corstatus              =   $correct->save();
                                            }

                                    }
                            }
                        if($queststatus & $optstatus & $corstatus)
                            {
                                return array('status'=>TRUE,'msg'=>'Question added successful','header'=>'Question');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Question addition failed','header'=>'Question');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }

            }
        public function editquestion(Request $request)
            {
                $validatedData = $request->validate([
                                                        'correctanswer'   =>  'required',
                                                        'question'        =>  'required',
                                                        'module'          =>   'required',
                                                        'option'          =>   'required'
                                                    ]);
                if($validatedData)
                    {
                        $question               =   Question::find($request->id);
                        $question->listorder    =   $request->listorder;
                        $question->module_id    =   $request->module;
                        $question->question     =   $request->question;
                        $queststatus            =   $question->save();
                        if($queststatus)
                            {
                                $i = 65;
                                foreach ($request->option as $key => $value)
                                    {
                                        $option                 =   Option::find($key);
                                        $option->question_id    =   $question->id;
                                        $option->option         =   chr($i).') '.$value;
                                        $optstatus              =   $option->save();

                                        if($request->correctanswer == $key)
                                            {
                                                $correct                =   Answer::find($request->correct_id);
                                                $correct->question_id   =   $question->id;
                                                $correct->option_id     =   $option->id;
                                                $corstatus              =   $correct->save();
                                            }
                                        $i++;
                                    }

                            }
                        if($queststatus & $optstatus & $corstatus)
                            {
                                return array('status'=>TRUE,'msg'=>'Question added successful','header'=>'Question');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Question addition failed','header'=>'Question');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }

            }
        public function rates()
            {
                return view('cms/modules/rates');
            }
        public function addrates(Request $request)
            {

                $validatedData = $request->validate([
                                                        'subscription'  =>  'required',
                                                        'cost'          =>  'required',
                                                        'days'          =>  'required'

                                                    ]);
                if($validatedData)
                    {
                        $subscription                   =   new Subscription();
                        $subscription->subscription     =   $request->subscription;
                        $subscription->days             =   $request->days;
                        $subscription->description      =   $request->description;
                        $subscription->cost             =   $request->cost;
                        $res                            =   $subscription->save();

                        if($res)
                            {
                                return array('status'=>TRUE,'msg'=>'Question added successful','header'=>'Question');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Question addition failed','header'=>'Question');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }

            }
        public function editrates(Request $request)
            {
                $validatedData = $request->validate([
                                                        'subscription'  =>  'required',
                                                        'cost'          =>  'required',
                                                        'days'          =>  'required'
                                                    ]);
                if($validatedData)
                    {
                        $subscription                   =   Subscription::find($request->id);
                        $subscription->subscription     =   $request->subscription;
                        $subscription->days             =   $request->days;
                        $subscription->description      =   $request->description;
                        $subscription->cost             =   $request->cost;
                        $res                            =   $subscription->save();

                        if($res)
                            {
                                return array('status'=>TRUE,'msg'=>'Question added successful','header'=>'Question');
                            }
                        else
                            {
                                return array('status'=>False,'msg'=>'Question addition failed','header'=>'Question');
                            }
                    }
                else
                    {
                        return array('status'=>FALSE,'msg'=>$validatedData->errors());
                    }
            }
        public function usermgt(Request $request)
            {
                $user           =   User::find($request->id);
                $user->status   =   (int)$request->type;
                return $user->save();
            }

        public function imageUploadPost(Request $request)
            {

                $validatedData  =   $request->validate([

                                        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

                                    ]);

                if($validatedData)
                    {
                        $imageName = time().'.'.$request->image->extension();



                        $request->image->move(public_path('uploads'), $imageName);

                        return $imageName;
                    }
                else
                    {
                        return $validatedData;
                    }



            }
    }

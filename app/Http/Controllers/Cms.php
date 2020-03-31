<?php

namespace App\Http\Controllers;

use App\Models\Answer;
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
                return view('cms.modules.dashboard');
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
                    'class'         =>  'required|unique:classes',
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
                $choice = "";
                $size = (int)$request->choices + 65;
                for($i=65; $i<$size; $i++)
                    {
                        $choice .='<div class="form-group form-row">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">'.chr($i).'</div>
                                            </div>
                                            <input type="text" class="form-control" name="option['.chr($i).'][]" >
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <input type="radio" name="correctanswer" value="'.chr($i).'">
                                                </div>
                                            </div>
                                        </div>
                                    </div>';
                    }
                return $choice;
            }
        public function questionanswers(Request $request)
            {
                $choice = "";
                $i=65;
                $answer = Answer::where('question_id',$request->question_id)->first();
                foreach(Option::where('question_id',$request->question_id)->get() as $value)
                    {
                        $t = ($answer->option_id == $value->id)?'checked':NULL;
                        $choice .='<div class="form-group form-row">
                                            <div class="input-group">
                                                 <div class="input-group-prepend">
                                                    <div class="input-group-text">'.chr($i).'</div>
                                                </div>
                                                <input type="text" class="form-control" name="option['.$value->id.']"  value="'.str_replace(chr($i).') ','',$value->option).'">
                                                <input type="hidden" name="correct_id" value="'.$answer->id.'" >
                                                <div class="input-group-append">
                                                    <div class="input-group-text">
                                                        <input type="radio" name="correctanswer" '.$t.' value="'.$value->id.'">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>';
                        $i++;
                    }
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
                                                        'cost'          =>  'required'

                                                    ]);
                if($validatedData)
                    {
                        $subscription                   =   new Subscription();
                        $subscription->subscription     =   $request->subscription;
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
                                                        'cost'          =>  'required'
                                                    ]);
                if($validatedData)
                    {
                        $subscription                   =   Subscription::find($request->id);
                        $subscription->subscription     =   $request->subscription;
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
    }

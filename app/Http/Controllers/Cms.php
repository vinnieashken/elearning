<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Models\Level;
use Illuminate\Http\Request;

class Cms extends Controller
    {
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
    }

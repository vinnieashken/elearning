<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Models\Question;
use App\Models\Subject;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class Datatable extends Controller
    {
        public function get_classes(Request $request)
            {
                $columns = array(
                    0   =>  'id',
                    1   =>  'class',
                    2   =>  'created_at'

                );

                $totalData      = Level::count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                {
                    $posts = Level::offset($start)
                                        ->limit($limit)
                                        ->orderBy($order,$dir)
                                        ->get();
                }
                else
                {
                    $search =   $request->input('search.value');


                    $posts  =   Level::where('class','LIKE',"%{$search}%")
                                           ->offset($start)
                                           ->limit($limit)
                                           ->orderBy($order,$dir)
                                           ->get();

                    $totalFiltered = Level::where('class','LIKE',"%{$search}%")
                                                ->count();
                }

                $data = array();
                if(!empty($posts))
                {
                    foreach ($posts as $post)
                    {
                        $nestedData['id']           =   $post->id;
                        $nestedData['class']        =   $post->class;
                        $nestedData['created_at']   =   date('j M Y h:i a',strtotime($post->created_at));
                        $nestedData['action']       =   '<a href="#" class="edit-class text-dark" data-level=\''.$post.'\' >
                                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle">
                                                         <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                                         </svg>
                                                         </a>';
                        $data[] = $nestedData;
                    }
                }

                $json_data = array(
                    "draw"            => intval($request->input('draw')),
                    "recordsTotal"    => intval($totalData),
                    "recordsFiltered" => intval($totalFiltered),
                    "data"            => $data
                );

                echo json_encode($json_data);
            }

        public function get_subjects(Request $request)
            {
                $columns = array(
                    0   =>  'id',
                    1   =>  'class',
                    2   =>  'subject'

                );

                $totalData      = Subject::count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                    {
                        $posts = Subject::offset($start)
                                      ->limit($limit)
                                      ->orderBy($order,$dir)
                                      ->get();
                    }
                else
                    {
                        $search  =   $request->input('search.value');
                        $classid =  Level::where('class','LIKE',"%{$search}%")->first()->id;

                        $posts  =   Subject::where('class_id','LIKE',"%{$classid}%")
                                         ->orwhere('subject','LIKE',"%{$search}%")
                                         ->offset($start)
                                         ->limit($limit)
                                         ->orderBy($order,$dir)
                                         ->get();

                        $totalFiltered = Subject::where('class_id','LIKE',"%{$classid}%")
                                              ->orwhere('subject','LIKE',"%{$search}%")
                                              ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        foreach ($posts as $post)
                            {
                                $nestedData['id']           =   $post->id;
                                $nestedData['class']        =   Level::where('id',$post->class_id)->first()->class;
                                $nestedData['subject']      =   $post->subject;
                                $nestedData['action']       =   '<a href="#" class="edit-subject text-dark"  data-subject=\''.$post.'\' >
                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                                                 </a>';
                                $data[] = $nestedData;
                            }
                    }

                $json_data = array(
                    "draw"            => intval($request->input('draw')),
                    "recordsTotal"    => intval($totalData),
                    "recordsFiltered" => intval($totalFiltered),
                    "data"            => $data
                );

                echo json_encode($json_data);
            }

        public function get_modules(Request $request)
            {
                $columns = array(
                    0   =>  'id',
                    1   =>  'class',
                    2   =>  'subject_id',
                    3   =>  'module'

                );

                $totalData      = Module::count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                    {
                        $posts = Module::offset($start)
                                      ->limit($limit)
                                      ->orderBy($order,$dir)
                                      ->get();
                    }
                else
                    {
                        $search     =   $request->input('search.value');
                        $subjectid  =   (Subject::where('subject','LIKE',"%{$search}%")->count() > 0)?Subject::where('subject','LIKE',"%{$search}%")->first()->id:FALSE;
//

                        $posts      =   Module::where('module','LIKE',"%{$search}%")
                                              ->orwhere('subject_id','LIKE',"%{$subjectid}%")
                                                 ->offset($start)
                                                 ->limit($limit)
                                                 ->orderBy($order,$dir)
                                                 ->get();

                        $totalFiltered = Module::where('module','LIKE',"%{$search}%")
                                                ->orwhere('subject_id','LIKE',"%{$subjectid}%")
                                                ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        foreach ($posts as $post)
                            {
                                $subject                    =   Subject::where('id',$post->subject_id)->first();
                                $nestedData['id']           =   $post->id;
                                $nestedData['level']        =   Level::where('id',$subject->class_id)->first()->class;
                                $nestedData['subject']      =   $subject->subject;
                                $nestedData['module']       =   $post->module;
                                $nestedData['action']       =   '<a href="#" class="edit-module text-dark" data-module=\''.$post.'\' >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                                                 </a>
                                                                 <a href="'.url('cms/questions/'.$post->id.'/'.Str::slug($post->module,"-")).'" class="text-dark">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square align-middle"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                                                </a>';
                                $data[] = $nestedData;
                            }
                    }

                $json_data = array(
                    "draw"            => intval($request->input('draw')),
                    "recordsTotal"    => intval($totalData),
                    "recordsFiltered" => intval($totalFiltered),
                    "data"            => $data
                );

                echo json_encode($json_data);
            }
        public function get_questions(Request $request)
            {
                $columns = array(
                    0   =>  'question'

                );

                $totalData      = Question::count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                    {
                        $posts = Question::offset($start)
                                       ->limit($limit)
                                       ->orderBy($order,$dir)
                                       ->get();
                    }
                else
                    {
                        $search     =   $request->input('search.value');

            //

                        $posts      =   Question::where('question','LIKE',"%{$search}%")
                                              ->offset($start)
                                              ->limit($limit)
                                              ->orderBy($order,$dir)
                                              ->get();

                        $totalFiltered = Question::where('question','LIKE',"%{$search}%")

                                               ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        $x= $start + 1;
                        foreach ($posts as $post)
                            {

                                $nestedData['*']            =   $x;
                                $nestedData['question']     =   $post->question;
                                $nestedData['action']       =   '<a href="#" class="edit-question text-dark" data-question=\''.$post.'\' >
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                                                </a>';

                                $data[] = $nestedData;
                                $x++;
                            }
                    }

                $json_data = array(
                                    "draw"            => intval($request->input('draw')),
                                    "recordsTotal"    => intval($totalData),
                                    "recordsFiltered" => intval($totalFiltered),
                                    "data"            => $data
                                );

                echo json_encode($json_data);
            }
    }

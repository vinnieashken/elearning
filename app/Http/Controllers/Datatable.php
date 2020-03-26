<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Models\Subject;
use App\Models\Module;
use Illuminate\Http\Request;

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
                    1   =>  'subject_id',
                    2   =>  'module'

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
                        $search =   $request->input('search.value');


                        $posts  =   Module::where('module','LIKE',"%{$search}%")
                                         ->offset($start)
                                         ->limit($limit)
                                         ->orderBy($order,$dir)
                                         ->get();

                        $totalFiltered = Level::where('module','LIKE',"%{$search}%")
                                              ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        foreach ($posts as $post)
                            {
                                $nestedData['id']           =   $post->id;
                                $nestedData['subject']      =   Subject::where('id',$post->subject_id)->first()->subject;
                                $nestedData['module']       =   $post->module;
                                $nestedData['action']       =   '<a href="#" class="edit-module text-dark" data-module=\''.$post.'\' >
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
    }

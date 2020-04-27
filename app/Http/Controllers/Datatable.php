<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Institution;
use App\Models\Level;
use App\Models\Payment;
use App\Models\Question;
use App\Models\Subject;
use App\Models\Module;
use App\Models\Subscription;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Session;

class Datatable extends Controller
    {
        public $roles;
        public function __construct()
            {

                $this->roles = unserialize(session('role'));
            }

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
                        $nestedData['action']       =   '<a href="#" class="edit-class text-dark mr-2" data-level=\''.$post.'\' >
                                                            <i class="fas fa-edit"></i>
                                                         </a>
                                                         <a href="" class="delete-record text-dark" data-id="'.$post->id.'" data-table="classes">
                                                            <i class="fas fa-trash"></i>
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
                                $nestedData['action']       =   '<a href="#" class="edit-subject text-dark mr-2"  data-subject=\''.$post.'\' >
                                                                    <i class="fas fa-edit"></i>
                                                                 </a>
                                                                 <a href="" class="delete-record text-dark" data-id="'.$post->id.'" data-table="subjects">
                                                                    <i class="fas fa-trash"></i>
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
                                $nestedData['publisher']    =   ($post->institution_id < 1)?"":Institution::where('id',$post->institution_id)->first()->name;
                                $nestedData['subject']      =   $subject->subject;
                                $nestedData['module']       =   $post->module;
                                $nestedData['action']       =   '<a href="#" class="edit-module text-dark mr-3" data-module=\''.$post.'\' >
                                                                    <i class="fas fa-edit"></i>
                                                                 </a>
                                                                 <a href="'.url('cms/questions/'.$post->id.'/'.Str::slug($post->module,"-")).'" class="text-dark" title="Questions">
                                                                    <i class="fas fa-plus-square"></i>
                                                                 </a>
                                                                 <a href="" class="delete-record text-dark ml-3" data-id="'.$post->id.'" data-table="modules">
                                                                    <i class="fas fa-trash"></i>
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
                    0   =>  'listorder',
                    1   =>  'question'

                );

                $totalData      = Question::where('module_id',$request->input('id'))
                                          ->count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                    {
                        $posts = Question::where('module_id',$request->input('id'))
                                       ->offset($start)
                                       ->limit($limit)
                                       ->orderBy($order,$dir)
                                       ->get();
                    }
                else
                    {
                        $search     =   $request->input('search.value');

            //

                        $posts      =   Question::where('module_id',$request->input('id'))
                                              ->where('question','LIKE',"%{$search}%")
                                              ->offset($start)
                                              ->limit($limit)
                                              ->orderBy($order,$dir)
                                              ->get();

                        $totalFiltered = Question::where('module_id',$request->input('id'))
                                                  ->where('question','LIKE',"%{$search}%")

                                               ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        $x= $start + 1;
                        foreach ($posts as $post)
                            {

                                $nestedData['*']            =   $post->listorder;
                                $nestedData['question']     =   $post->question;
                                $nestedData['action']       =   '<a href="#" class="edit-question text-dark mr-2" data-question=\''.$post.'\' >
                                                                     <i class="fas fa-edit"></i>
                                                                </a>

                                                                <a href="" class="delete-record text-dark" data-id="'.$post->id.'" data-table="questions">
                                                                    <i class="fas fa-trash"></i>
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

        public function get_rates(Request $request)
            {
                $columns = array(
                    0   =>  'subscription',
                    1   =>  'days',
                    2   =>  'description',
                    3   =>  'cost'

                );

                $totalData      = Subscription::count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                    {
                        $posts = Subscription::offset($start)
                                         ->limit($limit)
                                         ->orderBy($order,$dir)
                                         ->get();
                    }
                else
                    {
                        $search     =   $request->input('search.value');

                        //

                        $posts      =   Subscription::where('subscription','LIKE',"%{$search}%")
                                                ->orwhere('days','LIKE',"%{$search}%")
                                                ->orwhere('descriptions','LIKE',"%{$search}%")
                                                ->orwhere('cost','LIKE',"%{$search}%")
                                                ->offset($start)
                                                ->limit($limit)
                                                ->orderBy($order,$dir)
                                                ->get();

                        $totalFiltered = Subscription::where('subscription','LIKE',"%{$search}%")
                                                    ->orwhere('days','LIKE',"%{$search}%")
                                                    ->orwhere('descriptions','LIKE',"%{$search}%")
                                                    ->orwhere('cost','LIKE',"%{$search}%")
                                                    ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        $x= $start + 1;
                        foreach ($posts as $post)
                            {
                                $updatebtn                  =   ($this->roles["rates"]["update"])?'<a href="#" class="edit-rate text-dark mr-2" data-rate=\''.$post.'\' >
                                                                    <i class="fas fa-edit"></i>
                                                                 </a>':NULL;
                                $deletebtn                  =   ($this->roles["rates"]["delete"])?'<a href="#" class="delete-record text-dark" data-id=\''.$post->id.'\' data-table="subscriptions" >
                                                                    <i class="fas fa-trash"></i>
                                                                 </a>':NULL;

                                $nestedData['*']            =   $x;
                                $nestedData['subscription'] =   $post->subscription;
                                $nestedData['days']         =   $post->days;
                                $nestedData['description']  =   $post->description;
                                $nestedData['cost']         =   $post->cost;
                                $nestedData['action']       =   $updatebtn.$deletebtn;

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

        public function get_users(Request $request)
            {

                $columns = array(
                    0   =>  'name',
                    1   =>  'email',
                    2   =>  'phoneno',
                    3   =>   'status'

                );

                $totalData      = User::count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                {
                    $posts = User::offset($start)
                                         ->limit($limit)
                                         ->orderBy($order,$dir)
                                         ->get();
                }
                else
                {
                    $search     =   $request->input('search.value');

                    //

                    $posts      =   User::where('name','LIKE',"%{$search}%")
                                                ->orwhere('email','LIKE',"%{$search}%")
                                                ->orwhere('phoneno','LIKE',"%{$search}%")
                                                ->offset($start)
                                                ->limit($limit)
                                                ->orderBy($order,$dir)
                                                ->get();

                    $totalFiltered = User::where('name','LIKE',"%{$search}%")
                                                 ->orwhere('email','LIKE',"%{$search}%")
                                                 ->orwhere('phoneno','LIKE',"%{$search}%")
                                                 ->count();
                }

                $data = array();
                if(!empty($posts))
                    {
                        $x= $start + 1;
                        foreach ($posts as $post)
                            {

                                $rolesbtn               =   ($this->roles['users']["roles"] == TRUE)?'<a href="#" class="edit-user-roles text-dark mr-2" data-user=\''.$post.'\' >
                                                                    <i class="fas fa-edit"></i>
                                                             </a>':NULL;
                                $actionbtn              =    ($this->roles['users']["status"] == TRUE)?$post->status == 0?'<a href="" class="usermgt text-dark" data-type="1" data-user=\''.$post.'\' >
                                                                                   <i class="fas fa-user-plus"></i>
                                                                                 </a>':'<a href="#" class="usermgt text-dark" data-type="0" data-user=\''.$post.'\' >
                                                                                   <i class="fas fa-user-minus"></i>
                                                                                 </a>':NULL;

                                $nestedData['*']        =   $x;
                                $nestedData['name']     =   $post->name;
                                $nestedData['email']    =   $post->email;
                                $nestedData["phoneno"]  =   $post->phoneno;
                                $nestedData['status']   =   $post->status == 0?'inactive':'Active';
                                $nestedData['action']   =   $rolesbtn.$actionbtn;

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

        public function get_payments(Request $request)
            {
                $columns = array(
                    0   =>  'id',
                    1   =>  'user_id',
                    2   =>  'transactioncode',
                    3   =>  'channel'

                );

                $totalData      = Payment::where('amount_received',"!=",0)
                                          ->count();

                $totalFiltered  = $totalData;

                $limit  =   $request->input('length');
                $start  =   $request->input('start');
                $order  =   $columns[$request->input('order.0.column')];
                $dir    =   $request->input('order.0.dir');

                if(empty($request->input('search.value')))
                    {
                        $posts = Payment::where('amount_received',"!=",0)
                                        ->offset($start)
                                        ->limit($limit)
                                        ->orderBy($order,$dir)
                                        ->get();
                    }
                else
                    {
                        $search     =   $request->input('search.value');

                        //

                        $posts      =   Payment::where('amount_received',"!=",0)
                                                ->where('transactioncode','LIKE',"%{$search}%")
                                                ->orwhere('amount_received','LIKE',"%{$search}%")
                                                ->orwhere('phoneno','LIKE',"%{$search}%")
                                                ->offset($start)
                                                ->limit($limit)
                                                ->orderBy($order,$dir)
                                                ->get();

                        $totalFiltered =  Payment::where('amount_received',"!=",0)
                                                    ->where('transactioncode','LIKE',"%{$search}%")
                                                    ->orwhere('amount_received','LIKE',"%{$search}%")
                                                    ->orwhere('phoneno','LIKE',"%{$search}%")
                                                    ->count();
                    }

                $data = array();
                if(!empty($posts))
                    {
                        $x= $start + 1;
                        foreach ($posts as $post)
                            {
                                $customer                       =   Customer::where('id',$post->user_id)->first();
                                $institution                    =   Institution::where('id',$post->user_id)->first();
                                $nestedData['*']                =   $x;
                                $nestedData['name']             =   is_object($customer)?$customer->name:"";
                                $nestedData['phone']            =   $post->phone;
                                $nestedData['institution']      =   is_object($institution)?$institution->name:"";
                                $nestedData["transactioncode"]  =   $post->transactioncode;
                                $nestedData['amount']           =   $post->amount;
                                $nestedData['date']             =   $post->created_at;

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

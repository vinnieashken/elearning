<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/cms','Cms@index');
Route::get('/cms/question','Cms@question');
Route::get('/cms/class','Cms@classes');
Route::get('/cms/subject','Cms@subject');
Route::get('/cms/exams','Cms@modules');
//Datatables
Route::post('get_classes','Datatable@get_classes');
Route::post('get_subjects','Datatable@get_subjects');
Route::post('get_modules','Datatable@get_modules');
Route::post('get_questions','Datatable@get_questions');

Route::post('/cms/addsubject','Cms@addsubject');
Route::post('/cms/editsubject','Cms@editsubject');
Route::post('/cms/addmodule','Cms@addmodule');
Route::post('/cms/editmodule','Cms@editmodule');
Route::post('/cms/addclass','Cms@addlevel');
Route::post('/cms/editclass','Cms@editlevel');
Route::post('/cms/addquestion','Cms@addquestion');
Route::post('/cms/editquestion','Cms@editquestion');
Route::post('/subjectfromclass','Cms@getmodules');
Route::post('/choices','Cms@choices');
Route::post('/questionanswers','Cms@questionanswers');
Route::get('/cms/questions/{module}/{title}', function ($postId, $title=NULL) {
    return view('cms.modules.setquestion',['module_id'=>$postId,'title'=>$title]);
});

Route::get('/', function () {
    return view('landing');
});
Route::get('/login', function() {
    return view('app');
});

Route::get('/register', function() {
    return view('app');
});

Route::get('/app/{path?}', [
    'uses' => function() {return view('app');},
    'as' => '*',
    'where' => ['path' => '^((?!api|static).)*$']
]);


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
Route::get('/cms/rates','Cms@rates');
Route::get('/cms/users', function() {
    return view('cms.modules.users');
});
Route::get('/cms/profilemgt', function() {
    return view('cms.modules.profile');
});
Route::post('/cms/profile','Cms@profile');
Route::post('/cms/usermgt','Cms@usermgt');
//Datatables
Route::post('/get_users','Datatable@get_users');
Route::post('/get_classes','Datatable@get_classes');
Route::post('/get_subjects','Datatable@get_subjects');
Route::post('/get_modules','Datatable@get_modules');
Route::post('/get_questions','Datatable@get_questions');
Route::Post('/upload','Cms@imageUploadPost')->name('upload');
Route::post('/get_rates','Datatable@get_rates');
Route::post('/cms/addsubject','Cms@addsubject');
Route::post('/cms/editsubject','Cms@editsubject');
Route::post('/cms/addmodule','Cms@addmodule');
Route::post('/cms/editmodule','Cms@editmodule');
Route::post('/cms/addclass','Cms@addlevel');
Route::post('/cms/editclass','Cms@editlevel');
Route::post('/cms/addquestion','Cms@addquestion');
Route::post('/cms/editquestion','Cms@editquestion');
Route::post('/cms/addrates','Cms@addrates');
Route::post('/cms/editrates','Cms@editrates');
Route::get('/cms/customers','Cms@customers');
Route::post('/subjectfromclass','Cms@getmodules');
Route::post('/choices','Cms@choices');
Route::post('/questionanswers','Cms@questionanswers');
Route::post('/questionoption','Cms@questionoption');
Route::get('/cms/questions/{module}/{title}', function ($postId, $title=NULL) {
    return view('cms.modules.setquestion',['module_id'=>$postId,'title'=>$title]);
});
Route::post('cms/getuserroles','Cms@getuserroles');
Route::post('cms/edituserroles','Cms@edituserroles');
Route::post('cms/delete','Cms@delete');
Route::post('cms/update','Cms@update');
Route::post('cms/get_payments','Datatable@get_payments');
/*

Route::get('/academy/login', function () {
    return view('academy.index');
});

Route::get('/academy/register', function () {
    return view('academy.index');
});

*/
Route::get('{any}', function ($any = null) {

    if (strpos($any, 'academy') === 0)
        return view('academy.index');

    return view('newApp');
})->where('any', '^((?!cms|assets|static|get_users|get_classes|get_subjects|get_modules|get_questions|subjectfromclass|choices|get_rates|admin|register|login|api|questionanswers|questionoption|admin|upload).)*$');



Auth::routes();

Route::get('/stats','Api\ReportsController@getStats');



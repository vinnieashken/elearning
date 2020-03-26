<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/app/login','Api\LoginController@login');

Route::get('/classes/list','Api\ClassesController@list');

Route::get('/subjects/list','Api\SubjectsController@list');
Route::get('/subjects/class/{id}','Api\SubjectsController@getClassSubjects');

Route::get('/modules/list','Api\ModulesController@list');
Route::get('/modules/subject/{id}','Api\ModulesController@getSubjectModules');

Route::get('/questions/module/{id}','Api\QuestionsController@getModuleQuestions');

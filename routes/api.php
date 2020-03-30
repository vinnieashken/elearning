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

Route::post('/app/login','Api\LoginController@login');
Route::post('/app/register','Api\LoginController@register');

Route::get('/classes/list','Api\ClassesController@list');//->middleware('appkey');

Route::get('/subjects/list','Api\SubjectsController@list');
Route::get('/subjects/class/{id}','Api\SubjectsController@getClassSubjects');

Route::get('/modules/list','Api\ModulesController@list');
Route::get('/modules/subject/{id}','Api\ModulesController@getSubjectModules');
Route::get('/modules/{id}/user/{user_id}','Api\ModulesController@getUserModuleAnswers');
Route::get('/modules/{id}/marks/user/{user_id}','Api\ModulesController@getUserModuleMarks');
Route::get('/modules/user/{user_id}','Api\ModulesController@getUserModules');

Route::get('/questions/module/{id}','Api\QuestionsController@getModuleQuestions');
Route::post('/questions/module/user/answers','Api\QuestionsController@saveUserAnswers');


Route::get('/payments/subscriptions','Api\PaymentsController@getSubscriptions');
Route::post('/payments/subscribe','Api\PaymentsController@startTransaction'); //post
Route::post('/payments/mpesa/stk','Api\PaymentsController@startMpesaStkPush');
Route::post('/payments/mpesa/callback','Api\PaymentsController@mpesaCallback');
Route::get('/payments/subscription/user/{id}','Api\PaymentsController@checkSubscription');

Route::get('/payments/user/{user_id}','Api\PaymentsController@getUserPayments');
Route::get('/payments/subscriptions/user/{id}','Api\PaymentsController@getUserSubscriptions');

//for testing only
Route::get('/payments/subscriptions/list','Api\PaymentsController@listSubscriptions');
Route::get('/payments/list','Api\PaymentsController@listPayments');




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

Route::post('/payments/mpesa/callback','Api\PaymentsController@mpesaCallback');

//Route::group(['middleware' => ['appkey']], function () {
    //
    Route::post('/app/login','Api\LoginController@login');
    Route::post('/app/register','Api\LoginController@register');
    Route::post('/app/password/reset','Api\LoginController@resetPassword');
    Route::post('/app/otp/request','Api\LoginController@otpRequest');
    Route::post('/app/otp/verify','Api\LoginController@otpVerify');
    Route::get('/app/user/{id}','Api\LoginController@getUser');

    Route::get('/classes/list','Api\ClassesController@list');//->middleware('appkey');
    Route::get('/classes/highschool/list','Api\ClassesController@highschoolclasseslist');

    Route::get('/subjects/list','Api\SubjectsController@list');
    Route::get('/subjects/distinct','Api\SubjectsController@uniquelist');
    Route::get('/subjects/class/{id}','Api\SubjectsController@getClassSubjects');

    Route::get('/subjects/highschool/distinct','Api\SubjectsController@uniqueHighschoollist');

    Route::get('/modules/list','Api\ModulesController@list');
    Route::get('/modules/subject/{id}','Api\ModulesController@getSubjectModules');
    Route::get('/modules/subject/name/{name}','Api\ModulesController@getModulesBySubjectName');
    Route::get('/modules/{id}/user/{user_id}','Api\ModulesController@getUserModuleAnswers');
    Route::get('/modules/{id}/marks/user/{user_id}','Api\ModulesController@getUserModuleMarks');
    Route::get('/modules/user/{user_id}','Api\ModulesController@getUserModules');
    Route::get('/modules/users/{module_id}','Api\ModulesController@getModuleStudents');

    Route::get('/modules/nochoices/list','Api\ModulesController@nochoicesList');

    Route::get('/questions/module/{id}','Api\QuestionsController@getModuleQuestions');
    Route::post('/questions/module/user/answers','Api\QuestionsController@saveUserAnswers');
    Route::post('/questions/module/user/answers/choiceless','Api\QuestionsController@saveUserAnswerChoicelessperQuestion');

    Route::get('/payments/subscriptions','Api\PaymentsController@getSubscriptions');
    Route::get('/payments/institutions/subscriptions','Api\PaymentsController@getInstitutionsPackages');
    Route::post('/payments/subscribe','Api\PaymentsController@startTransaction'); //post
    Route::post('/payments/mpesa/stk','Api\PaymentsController@startMpesaStkPush');

    Route::get('/payments/subscription/user/{id}','Api\PaymentsController@checkSubscription');

    Route::get('/payments/user/{user_id}','Api\PaymentsController@getUserPayments');
    Route::get('/payments/subscriptions/user/{id}','Api\PaymentsController@getUserSubscriptions');
    Route::get('/payments/coupon','Api\PaymentsController@getActiveCoupon');

//for testing only
    Route::get('/payments/subscriptions/list','Api\PaymentsController@listSubscriptions');
    Route::get('/payments/list','Api\PaymentsController@listPayments');
    Route::get('/test/{id}','Api\ModulesController@mymodules');

/////=====================Institutions=============================================

    Route::post('/institution/register','Api\LoginController@registerInstitution');
    Route::post('/institution/teacher/register','Api\LoginController@registerTeacher');
    Route::post('/institution/student/register','Api\LoginController@registerStudent');
    Route::get('/institution/student/login/{code}','Api\LoginController@studentLogin');

    Route::post('/institution/student/edit','Api\InstitutionsController@editStudent');
    Route::post('/institution/teacher/edit','Api\InstitutionsController@editTeacher');

    Route::get('/institution/students/list/{id}','Api\InstitutionsController@studentsList');
    Route::get('/institution/teachers/list/{id}','Api\InstitutionsController@teachersList');

    Route::post('/institution/modules/add','Api\InstitutionsController@addModule');
    Route::post('/institution/modules/nochoices/add','Api\InstitutionsController@addChoicelessModuleQuestions');

    Route::post('/institution/modules/edit','Api\InstitutionsController@editModule');
    Route::post('/institution/modules/questions/add','Api\InstitutionsController@addModuleQuestions');
    Route::post('/institution/modules/questions/edit','Api\InstitutionsController@editModuleQuestions');
    Route::get('/publishers/list','Api\InstitutionsController@getPublishers');
    Route::get('/publishers/payments/{publisherid}','Api\InstitutionsController@getPublishersPayments');

    //Lseeons
    Route::get('/lessons/classes','Api\LessonsController@getClasses');
    Route::get('/lessons/subjects','Api\LessonsController@getSubjects');
    Route::get('/lessons/units','Api\LessonsController@getUnits');
    Route::get('/lessons/unit/{id}','Api\LessonsController@getUnitNotes');

    Route::get('/report/modules/average','Api\ModulesController@ModulesAverage');
    Route::get('/report/module/{id}','Api\ModulesController@ModuleStatistics');

    Route::get('testsub','Api\LoginController@testSubscribe');


    Route::prefix('/academy')->group(function () {
        Route::post('/login','Academy\AcUsersController@login');
        Route::post('/register','Academy\AcUsersController@register');

        Route::get('/plans','Academy\AcPackagesController@filter');
        Route::get('/plans/{id}','Academy\AcPackagesController@get');

        Route::get('/video','Academy\KTNVideoController@filter');
        Route::get('/video/{id}','Academy\KTNVideoController@get');
        Route::get('/rumble/search','Academy\KTNVideoController@rumbleMedia');

        Route::get('/subscription/active','Academy\AcSubscriptionsController@subscription');
        Route::post('/subscription/subscribe','Academy\AcSubscriptionsController@subscribe');
        Route::post('/subscription/confirm','Academy\AcSubscriptionsController@confirm');
    });
//});

//Academy Payment Confirmation
Route::post('/subscription/confirm','Academy\AcSubscriptionsController@confirm');


//Route::get('marks/{userid}','Api\ModulesController@debug');








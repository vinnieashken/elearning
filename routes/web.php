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




Route::get('/cms/question','Cms@question');
Route::get('/cms/dashboard','Cms@index');
Route::get('/cms/class','Cms@classes');
Route::get('/cms/subject','Cms@subject');
Route::get('/cms/modules','Cms@modules');


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


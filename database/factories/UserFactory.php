<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


use App\Models\Level;
use App\Models\Subject;
use App\Models\Module;
use App\Models\Question;
use App\Models\Option;
use App\Models\Answer;
use App\Models\Application;
use App\Models\Subscription;


/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(Subscription::class, function (Faker $faker){

    return [
        'subscription' => $faker->word,
        'cost' => 0,
        'days' => 0,
        'description'=>''
    ];
});

$factory->define(Application::class, function (Faker $faker){

    return [
        'name' => $faker->word,
        'key' => 'SEL123456'
    ];
});

$factory->define(Level::class, function (Faker $faker){

   return [
       'class' => $faker->numberBetween(1,20)
   ];
});

$factory->define(Subject::class, function (Faker $faker){
    return [
        'subject'=> $faker->country,
        'class_id' => $faker->numberBetween(1,8)
    ];
});

$factory->define(Module::class, function (Faker $faker){
    return [
        'module'=> $faker->jobTitle,
        'subject_id' => $faker->numberBetween(1,8)
    ];
});

$factory->define(Question::class, function (Faker $faker){
    return [
        'question'=> $faker->text."?",
        'module_id' => $faker->numberBetween(1,8)
    ];
});

$factory->define(Option::class, function (Faker $faker){
    return [
        'option'=> $faker->text,
        'question_id' => $faker->numberBetween(1,8)
    ];
});

$factory->define(Answer::class, function (Faker $faker){
    return [
        'option_id'=> $faker->text,
        'question_id' => $faker->numberBetween(1,8)
    ];
});

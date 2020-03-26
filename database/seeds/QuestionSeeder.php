<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;


class QuestionSeeder extends Seeder
{
    private $faker;
    private $options;
    private $answer;
    public function run(Faker $faker)
    {
        $this->options = ['A','B','C','D'];
        $this->faker = $faker;

//        foreach (range(0,9) as $optionnum)
//        {
//            $subject = (object)['id'=>20];
//
//            //$text = $this->options[$optionnum].") ".$faker->word;
//
//            $module = factory(App\Models\Module::class)->create(['subject_id' => $subject->id]);
//        }

        //return;

        foreach (range(1,8) as $num) {

            $class = factory(App\Models\Level::class)->create(['class' => "class ".$num]);

            factory(App\Models\Subject::class, 10)->create(['class_id' => $class->id])->each(function ($subject) {

                foreach (range(0, 4) as $num) {
                    $module = factory(App\Models\Module::class)->create(['subject_id' => $subject->id]);

                    foreach (range(0,9) as $questionnum)
                    {
                        $question = factory(App\Models\Question::class)->create(['module_id' => $module->id]);

                        foreach (range(0,3) as $optionnum)
                        {
                            $text = $this->options[$optionnum].") ".$this->faker->city;

                            $option = factory(App\Models\Option::class)->create(['question_id' => $question->id,'option'=>$text]);
                            $this->answer = $option;
                        }

                        factory(App\Models\Answer::class)->create(['question_id' => $question->id,'option_id'=>$this->answer->id]);

                    }

                }


            });
        }

    }
}

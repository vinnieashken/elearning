<?php

use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        foreach (range(1,10) as $num)
        {
            $class = factory(App\Models\Level::class)->create(['class'=> $num ]);

            factory(App\Models\Subject::class,10)->create(['class_id'=> $class->id ])->each(function ($subject){

                foreach (range(0,4) as $num)
                {
                    $module = factory(App\Models\Module::class)->create(['subject_id'=> $subject->id ]);
                }


            });
        }

    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('lesson_questions'))
            return;

        Schema::create('lesson_questions', function (Blueprint $table) {
            $table->id();
            $table->integer('unit_id');
            $table->integer('number');
            $table->text('question');
            $table->text('A');
            $table->text('B');
            $table->text('C');
            $table->text('D');
            $table->string('answer');
            $table->text('explanation');
            $table->string('category');
            $table->integer('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lesson_questions');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->integer('institution_id');
            $table->integer('teacher_id');
            $table->string('name');
            $table->string('class')->nullable();
            $table->string('adm_no')->nullable();
            $table->string('login_code')->nullable();
            $table->string('vas_id')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
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
        Schema::dropIfExists('students');
    }
}

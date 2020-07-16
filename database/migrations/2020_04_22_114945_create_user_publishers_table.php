<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPublishersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_publishers', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('transactionid');
            $table->integer('publisher_id');
            $table->integer('package_id');
            $table->integer('amount');
            $table->integer('complete')->default(0);
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
        Schema::dropIfExists('user_publishers');
    }
}

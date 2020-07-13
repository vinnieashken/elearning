<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAmountToAcSubscriptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ac_subscriptions', function (Blueprint $table) {
            $table->float('amount')->after('user_id');
            $table->dateTime('payment_initiated_on')->after('amount');
            $table->dateTime('payment_completed_on')->after('payment_initiated_on')->nullable();
            $table->foreign('user_id')->references('id')->on('ac_users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ac_subscriptions', function (Blueprint $table) {
            //
        });
    }
}

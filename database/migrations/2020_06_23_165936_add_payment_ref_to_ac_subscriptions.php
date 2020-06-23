<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaymentRefToAcSubscriptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ac_subscriptions', function (Blueprint $table) {
            $table->string('payment_ref')->after('amount')->nullable();
            $table->string('receipt_no')->after('payment_ref')->nullable();
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

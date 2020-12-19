<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPortionsFood extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // {"adulte":["A":241,"B":393,"C":545,"D":697], "enfant":["A":44,"B":100,"C":157]}
        Schema::table('foods', function (Blueprint $table) {
            $table->longText('portions')->after('Vitamine_C_mg');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('foods', function (Blueprint $table) {
            $table->dropColumn('portions');
        });
    }
}
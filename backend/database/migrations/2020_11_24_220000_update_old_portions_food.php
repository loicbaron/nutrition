<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateOldPortionsFood extends Migration
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
            $table->renameColumn('portions', 'old_portions');
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
            $table->renameColumn('old_portions', 'portions');
        });
    }
}
<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameBetacaroteneFood extends Migration
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
            $table->renameColumn('beta-carotene_microg', 'betacarotene_microg');
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
            $table->renameColumn('betacarotene_microg', 'beta-carotene_microg');
        });
    }
}
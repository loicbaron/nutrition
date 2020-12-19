<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portions', function (Blueprint $table) {
            $table->increments('id');
            $table->text('type');
            $table->text('letter');
            $table->integer('weight');
            $table->longText('image')->nullable();
            $table->integer('position');
            $table->unsignedInteger('food_id');
            $table->timestamps();
            $table->foreign('food_id')
            ->references('id')->on('foods')
            ->onDelete('cascade');
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('portions');
    }
}
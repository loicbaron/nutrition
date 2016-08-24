<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foods', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name');
            $table->text('type');
            $table->string('image');
            $table->float('energy_kcal');
            $table->float('energy_kj');
            $table->float('water');
            $table->float('protein');
            $table->float('fat');
            $table->float('carbohydrate');
            $table->float('fibre');
            $table->float('Ash');
            $table->float('Ca');
            $table->float('Fe');
            $table->float('Mg');
            $table->float('P');
            $table->float('K');
            $table->float('Na');
            $table->float('Zn');
            $table->float('Cu');
            $table->float('Vit_A-RAE');
            $table->float('Retinol');
            $table->float('beta-carotene');
            $table->float('Vit_D');
            $table->float('Vit_E');
            $table->float('Thiamin');
            $table->float('Riboflavin');
            $table->float('Niacin');
            $table->float('Vit_B6');
            $table->float('Folate');
            $table->float('Vit_B12');
            $table->float('Vit_C');
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
        Schema::drop('foods');
    }
}

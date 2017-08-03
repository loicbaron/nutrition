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
            $table->integer('Code_categorie');
            $table->text('Categorie');
            $table->integer('Code_aliment');
            $table->text('name');
            $table->text('Energie_kcal');
            $table->text('Energie_kJ');
            $table->text('Eau_g');
            $table->text('Protéines_g');
            $table->text('Lipides_g');
            $table->text('Glucides_g');
            $table->text('Fibres_g');
            $table->text('Cendres_g');
            $table->text('Calcium_mg');
            $table->text('Fer_mg');
            $table->text('Magnesium_mg');
            $table->text('Phosphore_mg');
            $table->text('Potassium_mg');
            $table->text('Sodium_mg');
            $table->text('Zinc_mg');
            $table->text('Cuivre_mg');
            $table->text('Vitamine_A_microg');
            $table->text('Retinol_microg');
            $table->text('beta-carotene_microg');
            $table->text('Vitamine_D_microg');
            $table->text('Vitamine_E_mg');
            $table->text('Vitamine_B1_mg');
            $table->text('Vitamine_B2_mg');
            $table->text('Vitamine_B3_mg');
            $table->text('Vitamine_B6_mg');
            $table->text('Vitamine_B9_microg');
            $table->text('Vitamine_B12_microg');
            $table->text('Vitamine_C_mg');
            $table->longText('images');
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

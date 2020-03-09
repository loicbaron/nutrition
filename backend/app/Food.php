<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'foods';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'Code_categorie',
        'Categorie',
        'Code_aliment',
        'name',
        'Energie_kcal',
        'Energie_kJ',
        'Eau_g',
        'Protéines_g',
        'Lipides_g',
        'Glucides_g',
        'Fibres_g',
        'Cendres_g',
        'Calcium_mg',
        'Fer_mg',
        'Magnesium_mg',
        'Phosphore_mg',
        'Potassium_mg',
        'Sodium_mg',
        'Zinc_mg',
        'Cuivre_mg',
        'Vitamine_A_microg',
        'Retinol_microg',
        'beta-carotene_microg',
        'Vitamine_D_microg',
        'Vitamine_E_mg',
        'Vitamine_B1_mg',
        'Vitamine_B2_mg',
        'Vitamine_B3_mg',
        'Vitamine_B6_mg',
        'Vitamine_B9_microg',
        'Vitamine_B12_microg',
        'Vitamine_C_mg',
        'portions',
        'images',
    ];

}

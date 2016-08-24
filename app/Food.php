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
        'name',
        'type',
        'energy_kcal',
        'energy_kj',
        'water',
        'protein',
        'fat',
        'carbohydrate',
        'fibre',
        'Ash',
        'Ca',
        'Fe',
        'Mg',
        'P',
        'K',
        'Na',
        'Zn',
        'Cu',
        'Vit_A-RAE',
        'Retinol',
        'beta-carotene',
        'Vit_D',
        'Vit_E',
        'Thiamin',
        'Riboflavin',
        'Niacin',
        'Vit_B6',
        'Folate',
        'Vit_B12',
        'Vit_C',
    ];

}

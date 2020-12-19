<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portion extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'portions';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'letter',
        'weight',
        'image',
        'position',
        'food_id',
    ];
    /**
     * Get the food item that owns the portion.
     */
    public function food()
    {
        return $this->belongsTo('App\Food');
    }
}

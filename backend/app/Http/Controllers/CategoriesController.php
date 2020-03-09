<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Food;

class CategoriesController extends Controller
{
    /**
     * Return all categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        return json_encode(
            Food::select('Categorie AS name', 'Code_categorie AS id')
            ->groupBy('Code_categorie', 'Categorie')
            ->get()
        );
    }

    /**
     * Return one category.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function one($id)
    {
        return json_encode(
            Food::select('Categorie AS name', 'Code_categorie AS id')
            ->where('Code_categorie', $id)
            ->groupBy('Code_categorie', 'Categorie')
            ->get()
        );;
    }

    /**
     * Return Food for one category.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function food($id)
    {
        return json_encode(
            Food::where('Code_categorie', $id)
            ->get()
        );;
    }
}

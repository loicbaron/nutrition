<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Food;

class FoodController extends Controller
{
    /**
     * Display the home view to search for food.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('index', ['foods' => Food::all()]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function foods()
    {
        //
        return view('admin', ['foods' => Food::all()]);
    }
    /**
     * Display a JSON of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function json()
    {
        //
        return view('json_foods', ['foods' => Food::all()]);
    }
    /**
     * Synchronize the images files with the food stored in DB. 
     *
     * @return \Illuminate\Http\Response
     */
    public function syncImages($id)
    {
        // TODO: Should create a Job and use Queues
        // https://laravel.com/docs/master/queues
        $max = 0;
        $results = Array();
        $food = Food::find($id);
        $portions = json_decode($food->portions, true);
        foreach($portions as $key => $p){
            $result = array_fill_keys(array_keys($p), null);
            unset($result["type"]);
            $dir = "images/photos/".$p["type"];
            $files1 = scandir($dir);
            $num = sprintf('%03d', $food->Code_aliment);
            foreach ($files1 as $value){
                if (strpos($value, '_'.$num.'_') !== false) {
                    $file_name = explode('_', $value);
                    $result[$file_name[2]] = $value;
                }
            }
            $results[$p["type"]] = $result;
        }
        $food->images = json_encode($results);
        $food->save();
        return $food->images; 
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return view('food', ['food' => Food::findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

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
        $key = "adults";
        $dir = "images/photos/".$key;
        $files1 = scandir($dir);
        $max = 0;

        $food = Food::find($id);

            // Analyze the max similar_text in images names
            foreach ($files1 as $value){
                $common = similar_text("$food->name", $value);
                if($common>$max){
                    $max = $common;
                };
            }
            // Add the image name to the result only if it reaches the max
            foreach ($files1 as $value){
                $common = similar_text("$food->name", $value);
                if($common==$max){
                    $result[$key][] = $value;
                };
            }
            $food->images = json_encode($result);
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

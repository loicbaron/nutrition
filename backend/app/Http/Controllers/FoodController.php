<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Food;
use App\Portion;

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
    public function admin()
    {
        //
        return view('admin', ['foods' => Food::all()]);
    }
    /**
     * Sort portions by letter.
     *
     * @return \Illuminate\Http\Response
     */
    public function sortPortions()
    {
        $allFood = Food::all();
        $allFood->each(function($item) {
            $portions = json_decode($item->old_portions, true);
            foreach($portions as $key => &$unsortedPortions) {
                ksort($unsortedPortions);
            }
            $item->old_portions = json_encode($portions);
            $item->save();
        });
        return "sorted";
    }
    /**
     * Sort images by key (letter of portion).
     *
     * @return \Illuminate\Http\Response
     */
    public function sortImages()
    {
        $allFood = Food::all();
        $allFood->each(function($item) {
            $images = json_decode($item->images, true);
            foreach($images as $key => &$oldImages){
                ksort($oldImages);
            }
            $item->images = json_encode($images);
            $item->save();
        });
        return "sorted";
    }

    /**
     * Display a JSON of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function updatePortions()
    {
        $results = array();
        $allFood = Food::all();
        $allFood->each(function($item) {
            $portions = json_decode($item->old_portions, true);
            foreach($portions as $key => $oldPortions) {
                foreach(array_keys($oldPortions) as $k => $letter) {
                    if ($letter != "type") {
                        // print("new portion = ".json_encode($newPortion));
                        $results[] = Portion::create([
                            "type" => $oldPortions["type"],
                            "letter" => $letter,
                            "weight" => (int)$oldPortions[$letter],
                            "position" => (int)$k+1,
                            "image" => json_decode($item->images, true)[$oldPortions["type"]][$letter],
                            "food_id" => (int)$item->id,
                        ]);
                    }
                }
            }
            $item->portions()->saveMany($results);
        });
        return json_encode($results);
    }

    /**
     * Display a JSON of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function json()
    {
        //
        return view('json_foods', ['foods' => Food::with('portions')->all()]);
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
        $portions = json_decode($food->old_portions, true);
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
        return view('food', ['food' => FoodFood::with('portions')->findOrFail($id)]);
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

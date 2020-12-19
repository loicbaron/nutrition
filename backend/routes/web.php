<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', 'FoodController@index');
Route::get('/food', 'FoodController@index');
Route::get('/admin', 'FoodController@admin');
Route::get('json/food', 'FoodController@json');

Route::get('sync/images/{id}', 'FoodController@syncImages');

Route::get('/api/portions', 'FoodController@updatePortions');
Route::get('/api/portions/sort', 'FoodController@sortPortions');
Route::get('/api/images/sort', 'FoodController@sortImages');

Route::match(['get', 'options'], '/api/categories', 'CategoriesController@all')->middleware("cors");
Route::match(['get', 'options'], '/api/categories/{id}', 'CategoriesController@one')->middleware("cors");
Route::match(['get', 'options'], '/api/categories/{id}/food', 'CategoriesController@food')->middleware("cors");

Route::get('/about', function () {
    return view('about');
});
Route::get('/contact', function () {
    return view('contact');
});
Route::get('/photos', function () {
    return view('photos');
});
Route::get('/24h', function () {
    return view('24h');
});
Route::get('/portions', function () {
    return view('portions');
});
Route::get('/project', function () {
    return view('project');
});

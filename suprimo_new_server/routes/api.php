<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\PriceController;
use App\Http\Controllers\Api\JoblistController;
use App\Http\Controllers\Api\MessagesController;
use App\Http\Controllers\api\AdminAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/getPrices',[PriceController::class,'getPrices']);

Route::post('/getAbout',[AboutController::class,'getAbout']);

Route::post('/getJobs',[JoblistController::class,'getJobs']);

Route::post('/getBlogs',[BlogController::class,'getBlogs']);

Route::get('/getMessages',[MessagesController::class,'getMessages']);

//! Admin

Route::post('/login',[AdminAuthController::class,'login']);

Route::post('/register',[AdminAuthController::class,'Register']);

Route::post('/storeMessage',[MessagesController::class,'storeMessage']);
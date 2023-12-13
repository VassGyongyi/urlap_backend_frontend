<?php

use App\Http\Controllers\KonyvController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('konyvs',[KonyvController::class,'index']);
Route::get('konyvs/{id}',[KonyvController::class,'show']);
Route::post('konyvs',[KonyvController::class,'store']);
Route::put('konyvs/{update}',[KonyvController::class,'update']);
Route::delete('konyvs/{destroy}',[KonyvController::class,'destroy']);
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\MailController;
Route::post('/send-email', [MailController::class, 'send']);

use App\Http\Controllers\ScoreController;
Route::post('/save-score', [ScoreController::class, 'saveScore']);

use App\Http\Controllers\LeaderboardController;
Route::get('/leaderboard', [LeaderboardController::class, 'index']);

use App\Http\Controllers\RatingController;
Route::post('/submit-rating', [RatingController::class, 'store']);
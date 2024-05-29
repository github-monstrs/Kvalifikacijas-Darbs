<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeaderboardController extends Controller
{
    public function index()
    {
        $leaderboard = DB::table('scores')
            ->join('users', 'scores.user_id', '=', 'users.id')
            ->join('games', 'scores.game_id', '=', 'games.id')
            ->select('games.title as game_title', 'users.name', 'scores.value')
            ->orderBy('scores.value', 'desc')
            ->get();

        return response()->json($leaderboard);
    }
}


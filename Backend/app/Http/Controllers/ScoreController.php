<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Score;
use App\Models\User;
use App\Models\Game;

class ScoreController extends Controller
{
    /**
     * Save the score in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function saveScore(Request $request)
    {
        $validatedData = $request->validate([
            'score' => 'required|integer',
            'gameID' => 'required|exists:games,id',
            'userID' => 'required|exists:users,id',
        ]);

        // Retrieve the user and game models
        $user = User::findOrFail($validatedData['userID']);
        $game = Game::findOrFail($validatedData['gameID']);

        // Create a new score instance
        $score = new Score();
        $score->value = $validatedData['score'];

        // Associate the user and game with the score
        $score->user()->associate($user);
        $score->game()->associate($game);

        // Save the score
        $score->save();

        return response()->json(['message' => 'Score saved successfully'], 200);
    }
}

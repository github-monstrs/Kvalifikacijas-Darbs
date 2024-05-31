<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating; // Assuming you have a Rating model

class RatingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'stars' => 'required|integer|min:1|max:5',
        ]);

        // Save the rating to the database
        $rating = new Rating();
        $rating->stars = $validated['stars'];
        $rating->save();

        return response()->json(['message' => 'Rating submitted successfully!'], 200);
    }
}


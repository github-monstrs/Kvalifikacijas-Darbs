<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'game_id', 'value'];

    /**
     * Get the user that owns the score.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the game that the score belongs to.
     */
    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}

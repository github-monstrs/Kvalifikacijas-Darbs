<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }

    public function toggleAdmin(User $user)
    {
        $user->is_admin = !$user->is_admin;
        $user->save();
        return response()->json(['message' => 'User admin status toggled successfully']);
    }
}

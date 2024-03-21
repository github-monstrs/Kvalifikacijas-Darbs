<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function send(Request $request)
    {
        $formData = $request->only(['name', 'email', 'message']);

        Mail::to('jekabs.zorgenfreijs@gmail.com')->send(new ContactFormMail($formData));

        return response()->json(['message' => 'Email sent successfully']);
    }
}

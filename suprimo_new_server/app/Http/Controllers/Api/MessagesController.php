<?php

namespace App\Http\Controllers\Api;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MessagesController extends Controller
{
    public function getMessages(){
        $messages = Message::all();

        return $messages;
    }
    public function storeMessage(Request $request){

        $message = new Message;
        $message->name = $request->name;
        $message->phone = $request->phone;
        $message->email = $request->email;
        $message->message = $request->message;

        $message->save();

        return Response()->json(['message'=>'Message succesfully sent']);
    }
}

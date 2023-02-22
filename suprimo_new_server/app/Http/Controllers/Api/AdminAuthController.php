<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminAuthController extends Controller
{
    public function Login(Request $request){

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $token = $user->createToken('login')->accessToken;

            return response([
                'message'=>'Succesfully Logged In',
                'user'=>$user,
                'token'=>$token
            ],200);
        } 
        else{ 
            return response([
                'message'=>'Incorect password or email',
                'type' => 'danger'
            ],401);
        } 
    
    }

    public function Register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
    
        if($validator->fails()){
            return 'validator error' ;       
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return $user;
         
        

    }
}

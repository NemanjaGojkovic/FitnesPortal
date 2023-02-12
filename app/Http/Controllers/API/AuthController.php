<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname'=> 'required|string|max:255', 
            'lastname'=> 'required|string|max:255', 
            'birthday'=> 'required|date', 
            'category_id' => 'required|numeric|min:1|max:4', 
            'email'=>'required|string|email|max:255|unique:users',
            'password'=>'required|string|min:5'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user = User::create([
            'firstname'=> $request->firstname, 
            'lastname'=> $request->lastname, 
            'birthday'=> $request->birthday, 
            'category_id' => $request->category_id, 
            'email'=> $request->email,
            'password'=> Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);

    }

    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json(['message'=>'Korisnik ne postoji']);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message'=>'Dobrodosao ' .$user->firstname.'. Trenirajmo zajedno!', 'access_token'=>$token, 'token_type'=>'Bearer']);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return ['message'=>"Uspesno ste se odjavili, dovidjenja"];
    }
}

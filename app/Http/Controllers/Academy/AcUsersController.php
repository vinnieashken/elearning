<?php

namespace App\Http\Controllers\Academy;

use App\Exceptions\ValidationException;
use App\Models\Academy\AcUsers;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class AcUsersController extends Controller
{
    public function login() {
        $request = Http::post('https://vas.standardmedia.co.ke/api/auth', request()->all());
        if ($request->ok()) {
            $userData = $request->json();
//            throw new ValidationException("", $userData);
            if (array_key_exists('id', $userData)) {
                $user = AcUsers::query()->where('user_id', $userData['id'])->first();
                if (!$user) {
                    $user = new AcUsers();
                    $user->user_id = $userData['id'];
                    $user->name = $userData['name'];
                    $user->email = $userData['email'];
                    $user->phone = $userData['phone'];
                    $user->save();
                }
                return response()->json($user);
            }
            throw new ValidationException("");
        }
        return response()->json($request->json(), $request->status());
    }

    public function register() {
        throw new ValidationException("", request()->all());
    }
}

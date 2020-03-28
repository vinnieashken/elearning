<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Login extends Controller
    {
        private $api;

        public function __construct()
            {
                $this->api = 'https://vas.standardmedia.co.ke/api/';
            }
        public function index()
            {

                return view('login/signin');
            }
        public function login(Request $request)
            {
                $username = $request->login;
                $password = $request->password;

                $params = ["body"=>json_encode(['username'=> $username, 'password'=>$password])];

                //return $params;

                $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> base_path('/cacert.pem'),'http_errors'=>false]);
                try
                    {

                        $response = $client->request('POST', $this->api . 'auth', $params);

                    }
                catch (Exception $e)
                    {
                        return $e->getMessage();
                    }

                $headers = $response->getHeaders();
                $body = $response->getBody()->getContents();
                $objbody = json_decode($body,true);
                if(!isset($objbody['message']))
                    {
                        Auth::login((object)$objbody)->middleware('auth');
                        redirect('cms');
                    }

            }
    }

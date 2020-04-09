<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    //
    private $api;

    public function __construct()
    {
        $this->api = 'https://vas.standardmedia.co.ke/api/';
    }

    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

//        $params = [
//            'form_params'=>['email'=> $email, 'password'=>$password],
//        ];

        $params = ["body"=>json_encode(['username'=> $username, 'password'=>$password])];

        //return $params;

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> base_path('/cacert.pem'),'http_errors'=>false]);
        try {

            $response = $client->request('POST', $this->api . 'auth', $params);

        }catch (Exception $e)
        {

        }

        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $objbody = json_decode($body);

        if(property_exists($objbody ,'message'))
        {
            return response()->json($objbody , 400);
        }
        //$body = json_decode($body);
        $customer = new Customer();
        $exists = $customer->where('user_id',$objbody->id)->first();

        if(is_null($exists))
        {
            $customer->user_id = $objbody->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $customer->save();
        }

        return $body;
    }

    public function register(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $password_confirmation = $request->password_confirmation;

        $params = ["body"=>json_encode(['name'=> $name,'email'=>$email ,'password'=>$password,'password_confirmation'=>$password_confirmation])];

        //return $params;

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> false,'http_errors'=>false]);
        try {

            $response = $client->request('POST', $this->api . 'register', $params);

        }catch (Exception $e)
        {
            Log::error("Registration error".$params['body'].' Details'.$e->getMessage());
        }

        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $objbody = json_decode($body);

        if(property_exists($objbody ,'message'))
        {
            return response()->json($objbody , 400);
        }
        //$body = json_decode($body);
        $customer = new Customer();
        $exists = $customer->where('user_id',$objbody->id)->first();
        if(is_null($exists))
        {
            $customer->user_id = $objbody->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $customer->save();
        }

        return $body;
    }
    public function resetPassword(Request $request)
    {
        $email = $request->email;
        $url = $request->redirect_url;

        $params = ["body"=>json_encode(['email'=> $email, 'redirect_url'=> $url ])];

        //return $params;

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> base_path('/cacert.pem'),'http_errors'=>false]);
        try {

            $response = $client->request('POST', $this->api . 'email/password', $params);

        }catch (Exception $e)
        {

        }

        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $objbody = json_decode($body);

        return $body;
    }
}

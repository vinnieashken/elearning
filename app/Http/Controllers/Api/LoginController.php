<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Institution;
use App\Models\Teacher;
use App\Models\Student;
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
        $exists = $customer->with('institution')->where('user_id',$objbody->id)->first();
        $default_institution = Institution::where('name','like','standard group')->first();
        $id = null;
        if(!is_null($default_institution))
            $id = $default_institution->id;
        else{
            $institution = new Institution();
            $institution->name = "Standard Group";
            $institution->save();
            $id = $institution->id;
        }

        if(is_null($exists))
        {
            $customer->user_id = $objbody->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $customer->institution_id = $id;
            $customer->save();

            $customer = $customer->with('institution')->where('id',$customer->id)->first();
        }
        else
        {
            if($exists->institution_id == null)
            {
                $exists->institution_id = $id;
                $exists->save();
            }

        }

        return $exists ?? $customer;
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

    //=====================================================================================================================================
    //institutions
    //====================================================================================================================================

    public function registerInstitution(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $password_confirmation = $request->password_confirmation;

        if(is_null($email) || is_null($name) || is_null($password) || is_null($password_confirmation))
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

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

        $exists = $customer->with('institution')->where('user_id',$objbody->id)->first();

        if(is_null($exists))
        {
            $institution = new Institution();
            $institution->name = $request->institution_name;
            $institution->phone = $request->institution_phone;
            $institution->address = $request->institution_address;
            $institution->save();

            $customer->user_id = $objbody->id;
            $customer->institution_id = $institution->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $customer->owner = 1;
            $customer->save();

            $customer = $customer->with('institution')->where('id',$customer->id)->first();
        }

        return $exists ?? $customer;
    }

    public function registerTeacher(Request $request)
    {
        $institution = $request->institutionid;
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $password_confirmation = $request->password_confirmation;

        if(is_null($institution) || is_null($email) || is_null($name) || is_null($password) || is_null($password_confirmation))
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

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
        $teacher = new Customer();
        $exists = $teacher->where('user_id',$objbody->id)->first();
        if(is_null($exists))
        {
            $teacher->institution_id = $institution;
            $teacher->user_id = $objbody->id;
            $teacher->name = $objbody->name;
            $teacher->email = $objbody->email;
            $teacher->teacher = 1;
            $teacher->save();

            $teacher = $teacher->where('id',$teacher->id)->first();
        }

        return $exists ?? $teacher;
    }

    public function registerStudent(Request $request)
    {
        $institution = $request->institutionid;
        $teacher = $request->teacherid;
        $name = $request->name;
        $adm_no = $request->adm_no;
        $email = $request->email;

        if(is_null($institution) || is_null($teacher) || is_null($name) || is_null($adm_no) || is_null($email))
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

        $student = new Customer();
        $existing  = $student->where('institution_id',$institution)->where('teacher_id',$teacher)->where('adm_no',$adm_no)->first();
        if(is_null($existing))
        {
            $student->institution_id = $institution;
            $student->teacher_id = $teacher;
            $student->email = $email;
            $student->name = $name;
            $student->adm_no = $adm_no;
            $student->login_code = $student->institution_id.'-'.$student->adm_no;
            $student->save();
            $student = $student->where('id',$student->id)->first();
        }
        else{

            $existing->teacher_id = $teacher;
            $existing->email = $email;
            $existing->name = $name;
            $existing->adm_no = $adm_no;
            $existing->login_code = $existing->institution_id.'-'.$existing->adm_no;
            $existing->save();
        }
        return $existing ?? $student;
    }

    public function studentLogin($code)
    {
        $customer = new Customer();
        $student =  $customer->where('login_code',$code)->first();

        if( is_null($student) )
        {
            return response()->json(['message'=>'Invalid code.','data'=> $code ] , 400);
        }

        return $student;
    }

}

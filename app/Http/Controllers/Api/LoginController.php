<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Institution;
use App\Models\Teacher;
use App\Models\Student;
use App\Utils\PaymentAssist;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    use PaymentAssist;
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

        if(is_null($email) || is_null($name) )
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

        $params = [];
        $no = preg_match_all("!(7[0-9]{8})!",$email,$matches);
        if($no > 0)
        {
            $phone = '254'.$matches[0][0];
            $params =["body"=>json_encode(['name'=> $name,'phone'=>$phone ,'otp'=> 1])];
        }
        else
        {
            if(is_null($password) || is_null($password_confirmation))
            {
                return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
            }

            $params = ["body"=>json_encode(['name'=> $name,'email'=>$email ,'password'=>$password,'password_confirmation'=>$password_confirmation])];
        }

        //return ['data'=>$params,'count'=>$no];

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
        //return $body;

        $customer = new Customer();
        $exists = $customer->where('user_id',$objbody->id)->first();
        if(is_null($exists))
        {
            $customer->user_id = $objbody->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $no = preg_match_all("!(7[0-9]{8})!",$objbody->phone,$matches);
            if($no > 0)
                $customer->phone = '0'.$matches[0][0];
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

        if(is_null($email) || is_null($name) )
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }
        $params = [];
        $no = preg_match_all("!(7[0-9]{8})!",$email,$matches);
        if($no > 0)
        {
            $phone = '254'.$matches[0][0];
            $params =["body"=>json_encode(['name'=> $name,'phone'=>$phone ,'otp'=> 1])];
        }
        else{

            if(is_null($password) || is_null($password_confirmation))
            {
                return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
            }

            $params = ["body"=>json_encode(['name'=> $name,'email'=>$email ,'password'=>$password,'password_confirmation'=>$password_confirmation])];
        }


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
            if($request->has('publisher'))
                $institution->publisher = 1;
            $institution->save();

            $customer->user_id = $objbody->id;
            $customer->institution_id = $institution->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $no = preg_match_all("!(7[0-9]{8})!",$objbody->phone,$matches);
            if($no > 0)
                $customer->phone = '0'.$matches[0][0];
            $customer->owner = 1;
            if($request->has('publisher'))
                $customer->publisher = 1;
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

        if (is_null($institution) || is_null($email) || is_null($name) ) {
            return response()->json(['message' => 'Invalid or missing parameters', 'data' => $request->all()], 400);
        }
        $params = [];
        $no = preg_match_all("!(7[0-9]{8})!",$email,$matches);
        if($no > 0)
        {
            $phone = '254'.$matches[0][0];
            $params =["body"=>json_encode(['name'=> $name,'phone'=>$phone ,'otp'=> 1])];
        }
        else {
            if (is_null($password) || is_null($password_confirmation)) {
                return response()->json(['message' => 'Invalid or missing parameters', 'data' => $request->all()], 400);
            }
            $params = ["body"=>json_encode(['name'=> $name,'email'=>$email ,'password'=>$password,'password_confirmation'=>$password_confirmation])];
        }
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
            $no = preg_match_all("!(7[0-9]{8})!",$objbody->phone,$matches);
            if($no > 0)
                $teacher->phone = '0'.$matches[0][0];
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
            $this->SubscribeStudent($institution,$student->id);
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

    public function testSubscribe()
    {
        return $this->SubscribeStudent(6,1);
    }


    public function otpRequest(Request $request)
    {
        $phone = $request->phone;
        $no = preg_match_all("!(7[0-9]{8})!",$phone,$matches);
        if($no > 0)
            $phone = '254'.$matches[0][0];

        $params =["body"=>json_encode(['phone'=>$phone ])];

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> false,'http_errors'=>false]);
        try {

            $response = $client->request('POST', 'https://vas.standardmedia.co.ke/api/otp/request', $params);

        }catch (Exception $e)
        {
            Log::error("Otp Request error".$params['body'].' Details'.$e->getMessage());
        }

        $headers = $response->getHeaders();
        $statusCode = $response->getStatusCode();
        $body = $response->getBody()->getContents();
        $objbody = json_decode($body);

        //return ['code'=>$statusCode,'body'=>$objbody];

        if((int)$statusCode > 250 )
        {
            return response()->json($objbody , 400);
        }

        return ['message'=>$objbody->message];
    }

    public function otpVerify(Request $request)
    {
        $phone = $request->phone;
        $otp = $request->otp;

        $no = preg_match_all("!(7[0-9]{8})!",$phone,$matches);
        if($no > 0)
            $phone = '254'.$matches[0][0];

        $params =["body"=>json_encode(['phone'=>$phone ,'otp'=> $otp])];

        $client = new Client(['headers' => [ 'Content-Type' => 'application/json' ],'verify'=> false,'http_errors'=>false]);
        try {

            $response = $client->request('POST', 'https://vas.standardmedia.co.ke/api/otp/verify', $params);

        }catch (Exception $e)
        {
            Log::error("Otp verify error".$params['body'].' Details'.$e->getMessage());
        }

        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $objbody = json_decode($body);

        if(property_exists($objbody ,'message'))
        {
            return response()->json($objbody , 400);
        }

        $no = preg_match_all("!(7[0-9]{8})!",$objbody->phone,$matches);
        if($no > 0)
            $phone = '0'.$matches[0][0];


        //return $objbody;

        $customer = Customer::where('user_id',$objbody->id)->first();

        if(is_null($customer))
        {
            $customer = new Customer();
            $customer->user_id = $objbody->id;
            $customer->name = $objbody->name;
            $customer->email = $objbody->email;
            $no = preg_match_all("!(7[0-9]{8})!",$objbody->phone,$matches);
            if($no > 0)
                $customer->phone = '0'.$matches[0][0];
            $customer->save();
            $customer = Customer::where('phone',$phone)->first();
        }

        return $customer;
    }

    public function getUser(Request $request,$id)
    {
        $customer = Customer::find($id);
        if(is_null($customer))
        {
            return response()->json(['message'=>'User not found.','data'=> 'user id '.$id ] , 400);
        }

        return $customer;
    }


}

<?php


namespace App\Utils;


use GuzzleHttp\Client;

class Mpesa
{
    protected $consumer_key;
    protected $consumer_secret;
    protected $client;
    protected $shortcode;
    protected $passkey;
    protected $callbackurl;
    protected $accountreference;

    public function __construct()
    {

        $this->consumer_key = 'dplNfCeA3H0rhkX48z2niAmjmMhcRp1W';
        $this->consumer_secret = 'UAdKcdGyc8Jc7mnd';
        $this->passkey = 'ed09387cf2a3dad2acf1b634e3a51091177f1a055f22b154acb5d2f96bf03a72';
        $this->shortcode = '505604';//174379
        $this->accountreference = 'ELE';
        $this->callbackurl = '';
        $this->client = new Client(['verify'=> base_path('/cacert.pem')]);
    }

    public function authorize()
    {
        $credentials = ($this->consumer_key . ':' . $this->consumer_secret);
        try{
<<<<<<< HEAD:app/Utils/MPesa.php
                $response = $this->client->request(
                    'GET',
                    'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
                    [
                        'accept' => 'application/json',
                        'auth' => [$credentials, null]
                    ]
                );
		}
		catch (GuzzleHttp\Exception\ConnectException $e)
		{
			return $e->getMessage();
		}
=======
            $response = $this->client->request(
                'GET',
                'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
                [
                    'accept' => 'application/json',
                    'auth' => [$credentials, null]
                ]
            );
        }catch (GuzzleHttp\Exception\ConnectException $e)
        {
            return;
        }
>>>>>>> added payments code:app/Utils/Mpesa.php
        $headers = $response->getHeaders();
        $body = $response->getBody()->getContents();
        $object = json_decode($body);
        //dump($headers);
        //dump($token->access_token);
        return $object->access_token;
    }


    public function pushStk($amount,$phone,$callbackurl,$refno="ELE")
    {
<<<<<<< HEAD:app/Utils/MPesa.php

		$phone = '254'.substr($phone_number,-9);
=======
        $matches = [];
        preg_match_all("!(7[0-9]{8})!",$phone,$matches);
        $phone = '254'.$matches[0][0];
        echo "hello world ".$amount." phone ".$phone." url=".$callbackurl;

        //return;
>>>>>>> added payments code:app/Utils/Mpesa.php

        $token = $this->authorize();

        //Log::info("ACCESS TOKEN: ".$token);
        $timestamp = date("YmdHis", time());
        $password = base64_encode($this->shortcode . $this->passkey . $timestamp);
        $data = [
            'BusinessShortCode' => $this->shortcode,
            'Password' => $password,
            'Timestamp' => $timestamp,
            'TransactionType' => 'CustomerPayBillOnline',
            'Amount' => $amount,
            'PartyA' => $phone,
            'PartyB' => $this->shortcode,
            'PhoneNumber' => $phone,
            'CallBackURL' => $callbackurl,
            'AccountReference' => $refno,
            'TransactionDesc' => 'Elearning',
        ];

        try{
<<<<<<< HEAD:app/Utils/MPesa.php
			//'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        $response = $this->client->post(
			'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
            ,
            [
                'headers' => [
                    'Authorization' => ' Bearer '.$token,
                    'Content-Type' => ' application/json',
                ],
                'body' => json_encode($data),
            ]
        );
		}catch (GuzzleHttp\Exception\ConnectException $e)
		{
			return $e->getMessage();
		}
=======
            //'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
            $response = $this->client->post(
                'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
                ,
                [
                    'headers' => [
                        'Authorization' => ' Bearer '.$token,
                        'Content-Type' => ' application/json',
                    ],
                    'body' => json_encode($data),
                ]
            );
        }catch (GuzzleHttp\Exception\ConnectException $e)
        {
            return;
        }
>>>>>>> added payments code:app/Utils/Mpesa.php

        $headers = $response->getHeaders();
        $body = $response->getBody();
        $body_array = json_decode($body);
<<<<<<< HEAD:app/Utils/MPesa.php
        return $headers;
        //dump($body_array);
=======
        return $body_array;
>>>>>>> added payments code:app/Utils/Mpesa.php
    }

}

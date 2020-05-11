<?php

namespace App\Exceptions;

use Exception;
use Throwable;

class ValidationException extends Exception {

//    protected $severity;

    public $message;
    public $details;
    public $code;

   public function __construct($message = null, $details = null, $code = 400)
   {
       $message = $message == null ? "An unspecified error has occurred. Kindly contact Standard Digital for assistance" : $message;
       parent::__construct($message);
       $this->message = $message;
       $this->details = $details;
       $this->code = $code;
   }

}


<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Level;
use Illuminate\Http\Request;

class ClassesController extends Controller
{
    //
    public function list()
    {
        $model = new Level();

        return $model->all();
    }

}

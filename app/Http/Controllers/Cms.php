<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Cms extends Controller
    {
        public function setQ()
            {
                return view('cms.modules.setquestion');
            }
    }

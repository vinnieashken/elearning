<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Cms extends Controller
    {
        public function index()
            {
                return view('cms.modules.dashboard');
            }
        public function question()
            {
                return view('cms.modules.setquestion');
            }
        public function modules()
            {
                return view('cms/modules/modules');
            }
        public function classes()
            {
                return view('cms/modules/classes');
            }
        public function subject()
            {
                return view('cms/modules/subject');
            }
    }

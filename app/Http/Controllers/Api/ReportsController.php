<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Level;
use App\Models\Module;
use App\Models\Subject;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    //

    public function getStats(Request $request)
    {
        $data = [];

        $subdata = [];

        foreach (Level::get() as $level)
        {

            $subjects = Subject::where('class_id',$level->id)->get();

            foreach ($subjects as $subject)
            {
                $count = Module::where('subject_id',$subject->id)->where('active',1)->count();
                $sub = [
                    'subject' => $subject->subject,
                    'modules' => $count
                ];
                array_push($subdata, $sub);
            }

            $data[$level->class] = $subdata;
        }

        return view('reports.statistics',['data' => $data]);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Unit;
use Illuminate\Http\Request;

class LessonsController extends Controller
{
    //
    public function getClasses()
    {
        $classes = Unit::distinct('class')->get(['class']);

        return $classes;
    }

    public function getSubjects()
    {
        $subjects = Unit::distinct('subject')->get(['subject']);
        return $subjects;
    }

    public function getUnits(Request $request)
    {
        $units = Unit::all();
        return $units;
    }

    public function getUnitNotes($id)
    {
        $unit = Unit::with('lessons','questions')->where('units.id',$id)->first();
        if(is_null($unit))
            return response()->json(['message'=>'unit not found'],400);

        return $unit;
    }
}

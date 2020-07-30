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

        if($request->has('page') && $request->has('size'))
        {
            $size = $request->size;

            if($request->has('class') && $request->has('subject'))
            {
                $class = $request->class;
                $subject = $request->subject;

                $units = Unit::where('class',$class)->where('subject',$subject)->paginate($size)->items();

                return $units;
            }
            if($request->has('class'))
            {
                $class = $request->class;
                $units = Unit::where('class',$class)->paginate($size)->items();
                return $units;
            }
            if($request->has('subject'))
            {
                $subject = $request->subject;
                $units = Unit::where('subject',$subject)->paginate($size)->items();
                return $units;
            }
        }

        if($request->has('class') && $request->has('subject'))
        {
            $class = $request->class;
            $subject = $request->subject;

            $units = Unit::where('class',$class)->where('subject',$subject)->get();

            return $units;
        }
        if($request->has('class'))
        {
            $class = $request->class;
            $units = Unit::where('class',$class)->get();
            return $units;
        }
        if($request->has('subject'))
        {
            $subject = $request->subject;
            $units = Unit::where('subject',$subject)->get();
            return $units;
        }

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

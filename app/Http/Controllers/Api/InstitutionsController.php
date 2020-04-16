<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class InstitutionsController extends Controller
{
    //
    public function editStudent(Request $request)
    {
        $id = $request->id;
        $institution = $request->institutionid;
        $teacher = $request->teacherid;
        $name = $request->name;
        $adm_no = $request->adm_no;
        $email = $request->email;

        $student = new Customer();
        $existing = $student->where('id',$request->id)->first();

        if(is_null($id) || is_null($institution) || is_null($teacher) || is_null($name) || is_null($adm_no))
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

        if(is_null($existing))
        {
            return response()->json(['message'=>'Record not found','data'=> $request->all()] , 400);
        }

        $existing->teacher_id = $teacher;
        $existing->email = $email;
        $existing->name = $name;
        $existing->adm_no = $adm_no;
        $existing->login_code = $existing->institution_id.'-'.$existing->adm_no;
        $existing->save();

        return $existing;
    }

    public function editTeacher(Request $request)
    {
        $id = $request->id;
        $institution = $request->institutionid;
        $name = $request->name;
        $email = $request->email;

        $teacher = new Customer();
        $existing = $teacher->where('id',$request->id)->first();
        if(is_null($id) || is_null($institution)  || is_null($name) )
        {
            return response()->json(['message'=>'Invalid or missing parameters','data'=> $request->all()] , 400);
        }

        if(is_null($existing))
        {
            return response()->json(['message'=>'Record not found','data'=> $request->all()] , 400);
        }

        $existing->institution_id = $institution;
        $existing->name = $name;
        $existing->save();
        return $existing;
    }
}

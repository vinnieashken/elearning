<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Level;
use Illuminate\Http\Request;

class ClassesController extends Controller
{
    //
    public function list(Request $request)
    {
        $model = new Level();
        $size = 10;
        $data = [];
        if($request->has('size') && $request->has('page'))
        {
            $size = $request->size;
            $page = $request->page;

            $results =  $model->paginate($size,['id','class'])->items();

            $totalrecords = $model->count();
            $totalpages = ceil($totalrecords / $size);

            $data ["pagination"] = [
                "totalRecords" => $totalrecords,
                "currentRecords" => count($results),
                "pageCount" => $totalpages,
                "currentPage" => $page,
                ];

            $data ["rows"] = $results;

            return $data;
        }

        $data = $model->get(['id','class']);

        return $data;
    }

}

<?php


namespace App\Http\Controllers\Academy;


use App\Models\KTNVideo;

class KTNVideoController
{
    public function get($id) {
        $video = KTNVideo::query()->where('id', $id)->first();
        if ($video)
            return response()->json(['message'=>'Video not found']);

        return response()->json($video);
    }

    public function filter() {
        $query = KTNVideo::query();

        return response()->json($query->get());
    }
}

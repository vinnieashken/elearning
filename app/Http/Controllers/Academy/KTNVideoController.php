<?php


namespace App\Http\Controllers\Academy;


use App\Models\KTNVideo;

class KTNVideoController
{
    public function get($id) {
        $video = KTNVideo::query()->where('id', $id)->first();
        if (!$video)
            return response()->json(['message'=>'Video not found'], 400);

        return response()->json($video);
    }

    public function filter() {
        $query = KTNVideo::query()->where('categoryid', 187)->where('platform', 'rumble');

        return response()->json($query->get());
    }
}

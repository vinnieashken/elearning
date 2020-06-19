<?php


namespace App\Http\Controllers\Academy;


use App\Exceptions\ValidationException;
use App\Models\KTNVideo;
use Illuminate\Support\Facades\Http;
use Ramsey\Collection\Exception\ValueExtractionException;

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

    public function rumbleMedia() {
        $response =  Http::get('https://rumble.com/api/v0/Media.Search.mrss?_p=utith.05zhpcaf2&url=https://rumble.com/v9h511-the-french-beans-export-business-kenya-to-france.html');

        $xml = simplexml_load_string($response->body());
        $item = $xml->channel->item;

        $media = $item->children('media', 'http://search.yahoo.com/mrss/');

        $data = array(
            'title' => (string) $item->title,
            'description' => (string) $item->description,
            'guid' => (string) $item->guid,
            'link' => (string) $item->link,
            'pubDate' => (string) $item->pubDate,
            'thumbnail' => (string) $media->thumbnail->attributes()['url'],
            'embed' => (string) $media->group->content->attributes()['url'],
        );

        return response()->json($data);
    }
}

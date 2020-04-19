<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Application;

class CheckAppKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $appkey = $request->header('appkey');
        if(is_null($appkey))
            return response()->json(['status' => false,'error' => "Invalid request"], 401);
        else
        {
            $model = new Application();
            $app = $model->where('key',$appkey)->first();

            if(is_null($app))
                return response()->json(['status' => false,'error' => "Invalid Key"], 401);
        }

        return $next($request);
    }
}

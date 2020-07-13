<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KTNVideo extends Model
{
    protected $connection = 'cms';
    protected $table = 'ktn_video';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
    protected $fillable = ['name'];
}

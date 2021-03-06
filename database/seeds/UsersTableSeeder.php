<?php

use App\Models\User_meta;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $id = DB::table('users')->insertGetId([
            'name'      =>  'Dennis Kiptoo Kiptugen',
            'username'  =>  'caydee',
            'email'     =>  'caydee209@gmail.com',
            'password'  =>  bcrypt('secret'),
            'status'    =>  true
        ]);
        DB::table('user_metas')->insert([
            'user_id'      =>   $id,
            'meta_key'     =>   'role',
            'meta_value'   =>   serialize(
                                            [
                                                'users'=>['roles'=>TRUE,'status'=>TRUE,"view"=>TRUE],
                                                'moderate'=>TRUE,
                                                'rates'=>["add"=>TRUE,"update"=>TRUE,"delete"=>TRUE,'view'=>TRUE]
                                            ]
                                        )
        ]);
        DB::table('user_metas')->insert([
            'user_id'      =>   $id,
            'meta_key'     =>   'thumburl',
            'meta_value'   =>   'assets/img/avatar.png'
        ]);



    }
}

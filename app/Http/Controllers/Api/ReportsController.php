<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\LessonQuestion;
use App\Models\Level;
use App\Models\Module;
use App\Models\Subject;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Madnest\Madzipper\Madzipper;

class ReportsController extends Controller
{
    //

    public function getStats(Request $request)
    {
        $data = [];



        foreach (Level::orderBy('class','ASC')->get() as $level)
        {
            $subdata = [];
            $subjects = Subject::where('class_id',$level->id)->get();

            foreach ($subjects as $subject)
            {
                $count = Module::where('subject_id',$subject->id)->where('status',1)->count();
                $sub = [
                    'subject' => $subject->subject,
                    'modules' => $count
                ];
                array_push($subdata, $sub);
            }


            $data[$level->class] = $subdata;
        }

        return view('reports.statistics',['data' => $data]);
    }


    public function getUploadpage()
    {
        return view('reports.uploadform');
    }

    public function ProcessUpload(Request $request)
    {
        $path = $request->file('lessons')->store('lessons');

        $workdir = Storage::disk('local')->path('lessons');
        $zippath = Storage::disk('local')->path($path);

        $location = base_path('/storage/app');



        $zipper = new Madzipper();
        try
        {
            $zipper->make($zippath)->extractTo($workdir);
            $zipper->close();

        }catch (\Exception $e)
        {

        }
        //now read our file
        $res = Storage::disk('local')->delete($path);
        $directories = Storage::disk('local')->directories('lessons');
        //$target = str_replace('/','\\',$directories[0]);
        $target = $directories[0];

        $srcpath = Storage::disk('local')->path($target);
        $contents = File::get($srcpath.'\data.js');

        $contents = trim($contents);
        $contents = str_replace("var json = ",'',$contents);
        $contents = str_replace('"','`',$contents);
        $contents = str_replace("'",'"',$contents);
        $contents = str_replace('`','\"',$contents);
        $contents = rtrim($contents,';');
        $contents = $contents = trim($contents);

        $contents = mb_convert_encoding($contents,'ASCII','UTF-8');
        $contents= substr($contents,1);

        //Storage::disk('local')->put('test1.json',$contents);

        //$json = File::get(Storage::disk('local')->path('test1.json'));
        $json = json_decode($contents);

        if(is_null($json))
            $contents = "unable";
        else
            $contents = $json;
        $unit = new Unit();
        $unit->unit = "Whole Numbers";
        $unit->class = 6;
        $unit->subject = "Mathematics";
        $unit->save();


        foreach ($contents->Super as $item)
        {

            if($item->Question == 'Null')
            {
                $lesson = new Lesson();
                $lesson->unit_id = $unit->id;
                $lesson->number = $item->Number;
                $lesson->topic = $item->Topic;
                $replace = 'src="lessons/'.$unit->id.'/images';
                $content = str_replace('src="images',$replace,$item->Content);
                $replace = 'src="lessons/'.$unit->id.'/multimedia';
                $content = str_replace('src="multimedia',$replace,$content);

                $lesson->content = $content;
                $lesson->save();
            }
            else
            {
                $question = new LessonQuestion();
                $question->unit_id = $unit->id;
                $question->number = $item->Number;
                $replace = 'src="lessons/'.$unit->id.'/images';
                $content = str_replace('src="images',$replace,$item->Question);
                $replace = 'src="lessons/'.$unit->id.'/multimedia';
                $content = str_replace('src="multimedia',$replace,$content);
                $question->question = $content;
                $question->A = $item->OptionA;
                $question->B = $item->OptionB;
                $question->C = $item->OptionC;
                $question->D = $item->OptionD;
                $question->answer = $item->Answer;
                $question->category = $item->Category;
                $question->explanation = $item->Qsatp;
                $question->save();
            }
        }

        $dirs = Storage::disk('local')->directories($target);

        foreach ($dirs as $dir)
        {
            $src = Storage::disk('local')->path($dir);
            $diff = str_replace($srcpath,'',$src);
            File::copyDirectory($src,public_path('lessons/'.$unit->id.$diff));
        }
        Storage::disk('local')->deleteDirectory($target);

        $lessons = Lesson::where('unit_id',$unit->id)->get();
        //response()->json($dirs);
       return view('reports.lesson',['lessons'=> $lessons]);
       //return redirect(url('/lesson/'.$unit->id));
    }

    public function getLessons(Request $request,$id)
    {
        $lessons = Lesson::where('unit_id',$id)->get();

        view('reports.lesson',['lessons'=> $lessons]);
    }

}

@extends('cms.includes.body')
@section('title', 'Set Questions')
@section('subtitle','Set Questions')
@section('content')
    <div class="card">
        <div class="card-body">
            <form action="" method="post" class="form form-horizontal">
                <div class="form-group form-row">
                    <div class="col">
                        <label for="" class="control-label">Class</label>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col">
                        <label for="" class="control-label">Subject</label>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="control-label">Question</label>
                    <input type="text" name="" id="" class="form-control summernote">
                </div>
                <div class="form-group">

                </div>
            </form>
        </div>
    </div>
@endsection

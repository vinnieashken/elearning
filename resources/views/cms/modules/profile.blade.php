@extends('cms.includes.body')
@section('title', 'Profile')
@section('subtitle','Profile')
@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-md-4">
                    <img src="{{  Auth::user()->profilepic?Auth::user()->profilepic:asset('assets/img/avatar.png') }}" alt="" id="ppic" class="img-fluid w-100 changepic">
                    <a href="javascript:;" class="btn btn-block btn-primary changepic">Change picture</a>
                    <input type="file" name="" id="" class="invisible">
                </div>
                <div class="col-12 col-md">
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" class="form-control" value=" {{Auth::user()->name }}">
                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" class="form-control" value="{{ Auth::user()->username }}">
                        </div>
                        <div class="form-group">
                            <label for="phoneno">Phone No</label>
                            <input type="text" name="phoneno" id="phoneno" class="form-control" value="{{ Auth::user()->phoneno }}">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-control" value="{{ Auth::user()->phoneno }}">
                        </div>
                        <div class="form-group d-flex">
                            <button type="submit" class="btn btn-primary ml-auto">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


@endsection

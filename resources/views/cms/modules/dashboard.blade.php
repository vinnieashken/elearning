@extends('cms.includes.body')
@section('title', 'Dashboard')
@section('subtitle','Dashboard')
@section('content')
    <div class="card">
        <div class="card-body">
            {{ Auth::User() }}
        </div>
    </div>
@endsection

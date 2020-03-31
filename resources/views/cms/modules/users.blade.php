@extends('cms.includes.body')
@section('title', 'Users')
@section('subtitle','users')
@section('content')
    <div class="card">

        <div class="card-body">
            <table class="table table-hover table-striped" id="users">
                <thead>
                <tr>
                    <th>*</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>*</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
@endsection

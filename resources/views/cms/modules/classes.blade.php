@extends('cms.includes.body')
@section('title', 'Class')
@section('subtitle','class')
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="text-right">
                <button class="btn btn-default" data-toggle="modal" data-target="#addModal">
                    <i class="align-middle" data-feather="plus"></i> Add Class
                </button>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-hover table-striped" id="classes">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Date Created</th>
                        <th>Created By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Class</th>
                        <th>Date Created</th>
                        <th>Created By</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
@endsection

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
                        <th>ID</th>
                        <th>Class</th>
                        <th>Date Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>Class</th>
                        <th>Date Created</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="addModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Class</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/addclass') }}" method="post" class="form form-horizontal create-form" data-modal="#addModal">
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label for="classroom" class="control-label">Class</label>
                        <input type="text" name="class" id="classroom" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Save changes</button>
                    </form>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="editModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Class</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/editclass') }}" method="post" class="form form-horizontal create-form" data-modal="#editModal">
                </div>
                <div class="modal-body">
                    <input type="hidden" name="id" id="edit-id">
                    <div class="form-group">
                        <label for="edit-classroom" class="control-label">Class</label>
                        <input type="text" name="class" id="edit-classroom" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Save changes</button>
                    </form>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
@endsection

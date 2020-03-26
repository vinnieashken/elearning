@extends('cms.includes.body')
@section('title', 'Subjects')
@section('subtitle','Subjects')
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="text-right">
                <button class="btn btn-default" data-toggle="modal" data-target="#addModal">
                    <i class="align-middle" data-feather="plus"></i> Add Subject
                </button>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-hover table-striped" id="subject">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>id</th>
                    <th>Class</th>
                    <th>Subject</th>
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
                    <h5 class="modal-title">Add Subject</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/addsubject') }}" method="post" class="form form-horizontal create-form" data-modal="#addModal">
                </div>
                <div class="modal-body">
                    @csrf
                    <div class="form-group">
                        <label for="add-classroom" class="control-label">Class</label>
                        <select name="class" id="add-classroom" class="custom-select">
                            @foreach(App\Models\Level::all() as $value)
                                <option value="{{ $value->id }}">{{ $value->class }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="add-subject" class="control-label">Subject</label>
                        <input type="text" name="subject" id="add-subject" class="form-control">
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
                    <h5 class="modal-title">Edit Subject</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/editsubject') }}" method="post" class="form form-horizontal create-form" data-modal="#editModal">
                </div>
                <div class="modal-body">
                    <input type="text" name="id" id="edit-id">
                    <div class="form-group">
                        <label for="edit-classroom" class="control-label">Class</label>
                        <select name="class" id="edit-classroom" class="custom-select">
                            @foreach(App\Models\Level::all() as $value)
                                <option value="{{ $value->id }}">{{ $value->class }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edit-subject" class="control-label">Subject</label>
                        <input type="text" name="subject" id="edit-subject" class="form-control">
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

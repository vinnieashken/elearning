@extends('cms.includes.body')
@section('title', 'Exam')
@section('subtitle','Exam')
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="text-right">
                <button class="btn btn-default" data-toggle="modal" data-target="#addModal">
                    <i class="align-middle" data-feather="plus"></i> Add Exam
                </button>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-hover table-striped" id="module">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Class/Level</th>
                    <th>Publisher</th>
                    <th>Creator</th>
                    <th>Subject</th>
                    <th>Exam</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>id</th>
                    <th>Class/Level</th>
                    <th>Publisher</th>
                    <th>Creator</th>
                    <th>Subject</th>
                    <th>Exam</th>
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
                    <h5 class="modal-title">Add Exam</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/addmodule') }}" method="post" class="form form-horizontal create-form" data-modal="#addModal">
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="add-publisher" class="control-label">Publisher</label>
                        <select name="publisher_id" id="add-publisher" class="custom-select m-class">
                            @foreach(App\Models\Institution::where('publisher',1)->get() as $value)
                                <option value="{{ $value->id }}">{{ $value->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="add-classroom" class="control-label">Class</label>
                        <select name="class" id="add-classroom" class="custom-select m-class">
                            @foreach(App\Models\Level::all() as $value)
                                <option value="{{ $value->id }}">{{ $value->class }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="add-subject" class="control-label">Subject</label>
                        <select name="subject" id="add-subject" class="custom-select m-subject">

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="add-module" class="control-label">Exam Name</label>
                        <input type="text" name="module" id="add-module" class="form-control">
                    </div>
                    <div class="form-check">
                        <label class="control-label mr-2" for="add-choices">
                            <input class="form-check-input" type="checkbox" value="1" id="add-choices" name="choices">
                            Has Choices ?
                        </label>
                    </div
                </div>
                <div class="modal-footer mt-2">
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
                    <h5 class="modal-title">Edit Exam</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
                <div class="modal-body">
                    <form action="{{ url('cms/editmodule') }}" method="post" class="form form-horizontal create-form" data-modal="#editModal">
                    <input type="hidden" name="id" id="edit-id">
                    <div class="form-group">
                        <label for="edit-publisher" class="control-label">Publisher</label>
                        <select name="publisher_id" id="edit-publisher" class="custom-select m-class">
                            @foreach(App\Models\Institution::where('publisher',1)->get() as $value)
                                <option value="{{ $value->id }}">{{ $value->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edit-classroom" class="control-label">Class</label>
                        <select name="class" id="edit-classroom" readonly="true" class="custom-select m-class">
                            @foreach(App\Models\Level::all() as $value)
                                <option value="{{ $value->id }}">{{ $value->class }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edit-subject" class="control-label">Subject</label>
                        <select name="subject" id="edit-subject" class="custom-select m-subject">

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edit-module" class="control-label">Exam Name</label>
                        <input type="text" name="module" id="edit-module" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="edit-status" class="control-label">Status</label>
                        <select name="status" id="edit-status" class="custom-select">
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label mr-2" for="edit-choices">
                        <input class="form-check-input" type="checkbox" value="1" id="edit-choices" name="choices">
                             Has Choices ?
                        </label>
                    </div>
                    <div class="form-group form-row border-top pt-2 mt-2">
                        <button type="submit" class="btn btn-primary ml-auto">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection

@extends('cms.includes.body')
@section('title', 'Set Questions')
@section('subtitle',App\Models\Module::where('id',$module_id)->first()->module)
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="text-right">
                <button class="btn btn-default qbtn" data-toggle="modal" data-target="#addModal" >
                    <i class="align-middle" data-feather="plus"></i> Add Question
                </button>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-horizontal" id="questions">
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Question</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>*</th>
                        <th>Question</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="addModal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Question</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/addquestion') }}" method="post" class="form form-horizontal add-question" data-modal="#addModal">
                </div>
                <div class="modal-body">
                        <input type="hidden" name="module" value="{{ $module_id }}">
                        <div class="form-group">
                            <label for="add-question_no" class="control-label">Question No</label>
                            <input type="number" name="listorder" id="add-question_no" class="form-control" value="1">
                        </div>
                        <div class="form-group">
                            <label for="add-question" class="control-label">Question</label>
                            <textarea name="question" id="add-question" class="form-control summernote"></textarea>
                        </div>
                        @if(App\Models\Module::where('id',$module_id)->first()->choices == 1)
                            {
                                <div class="form-group form-row">
                                    <div class="col-3">
                                        <label for="noc" class="control-label">No Of Choices</label>
                                        <input type="number" name="noofchoices" id="noc"  class="form-control"  min="1" required>
                                    </div>
                                    <div class="col-3">
                                        <label for="ansgrp" class="control-label">Answer group</label>
                                        <input type="number" name="answergroup" id="ansgrp"  class="form-control" min="1" value="1">
                                    </div>
                                    <div class="col-3">
                                        <a href="Javascript:;" class="btn btn-secondary choicebtn">Select</a>
                                    </div>

                                </div>

                                <div class="choices">

                                </div>
                        @else
                            <div class="form-group">
                                <label class="control-label w-100" for="add-answer">Correct Answer</label>
                                <textarea class="form-control summernote w-100" name="option" id="answer"></textarea>
                            </div>
                        @endif


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
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Question</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/editquestion') }}" method="post" class="form form-horizontal add-question" enctype="multipart/form-data" data-modal="#editModal">
                </div>
                <div class="modal-body">
                    <input type="hidden" name="id" id="edit-id">
                    <input type="hidden" name="module" value="{{ $module_id }}">
                    <div class="form-group">
                        <label for="edit-question_no" class="control-label">Question No</label>
                        <input type="number" name="listorder" id="edit-question_no" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="edit-question" class="control-label">Question</label>
                        <textarea name="question" id="edit-question" class="form-control summernote"></textarea>
                    </div>
                    <div class="choices">

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

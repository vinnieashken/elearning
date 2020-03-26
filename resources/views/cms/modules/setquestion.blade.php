@extends('cms.includes.body')
@section('title', 'Set Questions')
@section('subtitle',App\Models\Module::where('id',$module_id)->first()->module)
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="text-right">
                <button class="btn btn-default" data-toggle="modal" data-target="#addModal">
                    <i class="align-middle" data-feather="plus"></i> Add Module
                </button>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-horizontal" id="questions">
                <thead>
                    <tr>
                        <td>*</td>

                        <td>Module</td>
                        <td>Question</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>*</td>

                        <td>Module</td>
                        <td>Question</td>
                        <td>Action</td>
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
                    <form action="" method="post" class="form form-horizontal">
                </div>
                <div class="modal-body">
                        <input type="hidden" name="module" value="{{ $module_id }}">
                        <div class="form-group">
                            <label for="" class="control-label">Question</label>
                            <input type="text" name="" id="" class="form-control summernote">
                        </div>
                        <div class="form-group form-row">
                            <div class="col-3">
                                <label for="noc" class="control-label">No Of Choices</label>
                                <div class="input-group">
                                    <input type="text" name="noofchoices" id="noc"  class="form-control">
                                    <div class="input-group-append">
                                        <a href="Javascript:;" class="btn btn-secondary choicebtn">Select</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <legend>Choices</legend>
                        <div class="choices">

                        </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    </form>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>

@endsection

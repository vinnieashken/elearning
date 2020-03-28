@extends('cms.includes.body')
@section('title', 'Rates')
@section('subtitle','Rates')
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="text-right">
                <button class="btn btn-default" data-toggle="modal" data-target="#addModal">
                    <i class="align-middle" data-feather="plus"></i> Add Rate
                </button>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-hover table-striped" id="rates">
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Subscription</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>*</th>
                        <th>Subscription</th>
                        <th>Cost</th>
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
                    <h5 class="modal-title">Add Rate</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/addrates') }}" method="post" class="form form-horizontal create-form" data-modal="#addModal">
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label for="add-subscription" class="control-label">Subscription</label>
                        <input type="text" name="subscription" id="add-subscription" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="add-cost" class="control-label">Cost</label>
                        <input type="text" name="cost" id="add-cost" class="form-control">
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
                    <h5 class="modal-title">Edit Rate</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form action="{{ url('cms/editrates') }}" method="post" class="form form-horizontal create-form" data-modal="#editModal">
                </div>
                <div class="modal-body">
                    <input type="hidden" name="id" id="edit-id">
                    <div class="form-group">
                        <label for="edit-subscription" class="control-label">Subscription</label>
                        <input type="text" name="subscription" id="edit-subscription" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="edit-cost" class="control-label">Cost</label>
                        <input type="text" name="cost" id="edit-cost" class="form-control">
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

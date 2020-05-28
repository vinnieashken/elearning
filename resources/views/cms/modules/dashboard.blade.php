@extends('cms.includes.body')
@section('title', 'Dashboard')
@section('subtitle','Dashboard')
@section('content')
    <div class="row">
    <div class="col-12 col-md-6 col-xl d-flex">
        <div class="card flex-fill">
            <div class="card-body py-4">
                <div class="row">
                    <div class="col-8">
                        <h3 class="mb-2">{{ $customers }}</h3>
                        <div class="mb-0">Total<br/>Customers</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-default" data-feather="user-check"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl d-flex">
        <div class="card flex-fill">
            <div class="card-body py-4">
                <div class="row">
                    <div class="col-8">
                        <h3 class="mb-2">{{ $subjects }}</h3>
                        <div class="mb-0">Subjects</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-danger" data-feather="inbox"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl d-flex">
        <div class="card flex-fill">
            <div class="card-body py-4">
                <div class="row">
                    <div class="col-8">
                        <h3 class="mb-2">{{ $exams }}</h3>
                        <div class="mb-0">Exams</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-danger" data-feather="message-square"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl d-flex">
        <div class="card flex-fill">
            <div class="card-body py-4">
                <div class="row">
                    <div class="col-8">
                        <h3 class="mb-2">{{ $users }}</h3>
                        <div class="mb-0">Users</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-success" data-feather="message-square"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="card w-100">
            <div class="card-header">Payments</div>
            <div class="card-body">
                {{--<input type="text" id="min" placeholder="startdate"> -  <input type="text" id="max"  placeholder="enddate">--}}
                <table class="table table-striped mt-3" id="payments">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone Number</th>
                            <th>Publisher</th>
                            <th>Transaction Code</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Balance</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone Number</th>
                            <th>Publisher</th>
                            <th>Transaction Code</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Balance</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="activate-payment">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Activate Payment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{ url('api/payments/mpesa/callback') }}" id="edit-transaction">
                        <input type="hidden" name="transaction" id="edit-transaction">
                        <div class="form-group">
                            <label for="edit-sender_phone" class="control-label">
                                Phone No
                            </label>
                            <input type="text" name="sender_phone" id="edit-sender_phone" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="edit-mpesa_code" class="control-label">
                                Transaction No
                            </label>
                            <input type="text" name="mpesa_code" id="edit-mpesa_code" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="edit-amount" class="control-label">
                                Amount
                            </label>
                            <input type="text" name="amount" id="edit-amount" class="form-control">
                        </div>
                        <div class="form-group form-row">
                            <div class="ml-auto">
                                <button type="submit" class="btn btn-success">Save changes</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

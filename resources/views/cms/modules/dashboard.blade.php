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
                        <h3 class="mb-2">6,603</h3>
                        <div class="mb-0">Total<br/>subscribers</div>
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
                        <h3 class="mb-2">1,481</h3>
                        <div class="mb-0">Incoming<br/>Messages</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-danger" data-feather="inbox"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-right"><small><a class="analytics-links" href="http://sms.taifamobile.co.ke/index.php/admin/inbox">View Details</a></small></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl d-flex">
        <div class="card flex-fill">
            <div class="card-body py-4">
                <div class="row">
                    <div class="col-8">
                        <h3 class="mb-2">11,141</h3>
                        <div class="mb-0">Sent Bulk SMS</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-danger" data-feather="message-square"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-right"><small><a class="analytics-links" href="#">Sent over time</a></small></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl d-flex">
        <div class="card flex-fill">
            <div class="card-body py-4">
                <div class="row">
                    <div class="col-8">
                        <h3 class="mb-2">3,060</h3>
                        <div class="mb-0">Available Bulk SMS</div>
                    </div>
                    <div class="col-4 ml-auto text-right">
                        <div class="d-inline-block mt-2">
                            <i class="feather-lg text-success" data-feather="message-square"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-right"><small><a class="analytics-links" href="#">Based on what has been bought</a></small></div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="row mb-4">
        <div class="col-md-4 col-sm-12">
            <div class="border-light ui-bordered p-3 mt-2">
                <div class="media align-items-center">
                    <div class="media-body small mr-3">
                        <div class="font-weight-bold mb-3">SMS Deliveries</div>
                        <div class="mb-1">On Demand : 0</div><div class="mb-1">Subscription : 0</div><div class="mb-1">Bulk : 0</div>						</div>
                    <div class="d-flex align-items-center position-relative" style="height:60px;width: 60px;">
                        <div class="w-100 text-center font-weight-bold">0</br> Total</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="border-light ui-bordered p-3 mt-2">
                <div class="media align-items-center">
                    <div class="media-body small mr-3">
                        <div class="font-weight-semibold mb-3">Registered Services</div>
                        <div class="mb-1">On Demand : 5</div><div class="mb-1">Subscription : 16</div><div class="mb-1">Bulk : 4</div>						</div>
                    <div class="d-flex align-items-center position-relative" style="height:60px;width: 60px;">
                        <div class="w-100 position-absolute" style="height:60px;top:0;">
                            <canvas id="statistics-chart-1" style="display: block; width: 60px; height: 60px;" width="60" height="60"></canvas>
                        </div>
                        <div class="w-100 text-center font-weight-bold">25</br> Total</div>
                    </div>
                </div>
            </div>
        </div>



        <div class="col-md-4 col-sm-12">
            <div class="border-light ui-bordered p-3 mt-2">
                <div class="media align-items-center">
                    <div class="media-body small mr-3">
                        <div class="font-weight-semibold mb-3">Registered Shortcodes</div>
                        <div class="mb-1">Safaricom : 7</div><div class="mb-1">Airtel : 0</div><div class="mb-1">Equitel : 0</div>						</div>
                    <div class="d-flex align-items-center position-relative" style="height:60px;width: 60px;">
                        <div class="w-100 position-absolute" style="height:60px;top:0;">
                            <canvas id="statistics-chart-1" style="display: block; width: 60px; height: 60px;" width="60" height="60"></canvas>
                        </div>
                        <div class="w-100 text-center font-weight-bold">7</br> Total</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

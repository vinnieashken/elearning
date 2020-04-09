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
                        <div class="mb-0">Admin Users</div>
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

@endsection

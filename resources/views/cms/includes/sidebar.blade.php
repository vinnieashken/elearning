@php
    $role = unserialize(session('role'));
@endphp
<nav class="sidebar sidebar-sticky">
    <div class="sidebar-content  js-simplebar">
        <a class="sidebar-brand px-5" href="{{ url('cms') }}">
            <img class="img-fluid" src="{{ asset('assets/img/elearning.png?').date('YmdHis') }}" alt="Standard Epaper">
        </a>

        <ul class="sidebar-nav">
            <li class="sidebar-header">
                Main
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/') }}">
                    <i class="align-middle" data-feather="home"></i> <span class="align-middle">Dashboard</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/class') }}">
                    <i class="align-middle" data-feather="pocket"></i> <span class="align-middle">Class</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/subject') }}">
                    <i class="align-middle" data-feather="minus-square"></i> <span class="align-middle">Subject</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/exams') }}">
                    <i class="align-middle" data-feather="file-text"></i> <span class="align-middle">Exams</span>
                </a>
            </li>

            @if($role["moderate"])
                <li class="sidebar-item">
                    <a href="#dashboards" data-toggle="collapse" class="font-weight-bold sidebar-link collapsed">
                        <i class="align-middle" data-feather="settings"></i>
                        <span class="align-middle">Moderation</span>
                    </a>
                    <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse ">
                        <li class="sidebar-item">
                            <a class="sidebar-link d-flex" href="">
                                Pending
                                <span class="badge badge-warning ml-auto mr-3">{{ App\Models\Module::where('status',FALSE)->count()}}</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a class="sidebar-link d-flex" href="">
                                Active
                                <span class="badge badge-success ml-auto mr-3">{{ App\Models\Module::where('status',TRUE)->count()}}</span>
                            </a>
                        </li>
                    </ul>
                </li>
            @endif
            @if($role["rates"]["view"])
                <li class="sidebar-item">
                    <a class="sidebar-link font-weight-bold" href="{{ url('cms/rates') }}">
                        <i class="align-middle" data-feather="edit"></i>
                        <span class="align-middle">Rates</span>
                    </a>
                </li>
            @endif
            {{--<li class="sidebar-item">
                <a href="{{ url("cms/customers") }}" class="sidebar-link font-weight-bold">
                    <i class="align-middle" data-feather=""></i>
                    <span class="align-middle">Customers</span>
                </a>
            </li>--}}
            @if($role["users"]["view"])
                <li class="sidebar-item">
                    <a class="sidebar-link font-weight-bold" href="{{ url('cms/users') }}">
                        <i class="align-middle" data-feather="users"></i>
                        <span class="align-middle">Users</span>
                    </a>
                </li>
            @endif

        </ul>
    </div>
</nav>


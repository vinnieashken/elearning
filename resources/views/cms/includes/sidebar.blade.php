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
                    <i class="align-middle" data-feather="pocket"></i> <span class="align-middle">Subject</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/exams') }}">
                    <i class="align-middle" data-feather="pocket"></i> <span class="align-middle">Exams</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/rates') }}">
                    <i class="align-middle" data-feather="pocket"></i> <span class="align-middle">Rates</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('cms/users') }}">
                    <i class="align-middle" data-feather="pocket"></i> <span class="align-middle">Users</span>
                </a>
            </li>
            {{--<li class="sidebar-item">
                <a href="#dashboards" data-toggle="collapse" class="font-weight-bold sidebar-link collapsed">
                    <i class="align-middle" data-feather="shield"></i>
                    <span class="align-middle">Student</span>
                </a>
                <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse ">
                    <li class="sidebar-item"><a class="sidebar-link" href="">Manage Students</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="">Results</a></li>
                </ul>
            </li>
--}}
        </ul>
    </div>
</nav>

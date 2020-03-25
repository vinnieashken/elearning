<nav class="sidebar sidebar-sticky">
    <div class="sidebar-content  js-simplebar">
        <a class="sidebar-brand px-5" href="{{ url('dashboard') }}">
            <img class="img-fluid" src="{{ asset('assets/img/elearning.png') }}" alt="Standard Epaper">
        </a>

        <ul class="sidebar-nav">
            <li class="sidebar-header">
                Main
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('dashboard') }}">
                    <i class="align-middle" data-feather="home"></i> <span class="align-middle">Dashboard</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link font-weight-bold" href="{{ url('add-question') }}">
                    <i class="align-middle" data-feather="pocket"></i> <span class="align-middle">Add Question</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#dashboards" data-toggle="collapse" class="font-weight-bold sidebar-link collapsed">
                    <i class="align-middle" data-feather="shield"></i>
                    <span class="align-middle">Financial Services</span>
                </a>
                <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse ">
                    <li class="sidebar-item"><a class="sidebar-link" href="">Bulk Dispersment</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="">Refund</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="">Account Balance</a></li>
                    <li class="sidebar-item"><a class="sidebar-link" href="">B2B</a></li>
                </ul>
            </li>

        </ul>
    </div>
</nav>

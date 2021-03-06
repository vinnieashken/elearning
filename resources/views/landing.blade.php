<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Standard | eLearning</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('static/landing/css/bootstrap.min.css?').date('YmdHis') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('static/landing/css/font-awesome.min.css?').date('YmdHis') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('static/landing/css/animate.css?').date('YmdHis') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('static/landing/css/main.css?').date('YmdHis') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('static/landing/css/extras.css?').date('YmdHis') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('static/landing/css/responsive.css?').date('YmdHis') }}">


</head>
<body>

<header id="header-wrap">
    <nav class="navbar navbar-expand-md bg-white fixed-top scrolling-navbar indigo">
        <div class="w-100 d-block d-lg-none d-md-none">
            <a class="nav-link" href="#">
                <span style="font-size:20px;cursor:pointer" onclick="openNav()"
                      class="float-right mr-3 opennav">&#9776;</span>
                <img src="{{ asset('static/landing/img/logo.png?').date('YmdHis') }}" class="w-25 float-left"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

            </button>
        </div>

        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn border-0" onclick="closeNav()">&times;</a>
            <a href="#">HOME</a>

            <div class="dropdown">
                <a class=" dropdown-toggle" data-toggle="dropdown">CLASSES
                    <span class="caret" /></a>
                <ul class="dropdown-menu" id="classes1">

                </ul>
            </div>
            <div class="dropdown">
                <a class=" dropdown-toggle" data-toggle="dropdown">SUBJECTS
                    <span class="caret" /></a>
                <ul class="dropdown-menu" id="subjects1">

                </ul>
            </div>
            <a href="#">KCPE</a>
{{--            <a href="#">KCSE</a>--}}
            <a href="#">LOGIN</a>
            <a href="#">REGISTER</a>
        </div>


        <script>
            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
            }

            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            }
        </script>


        <div class="collapse navbar-collapse flex-column " id="navbar">

            <ul class="navbar-nav  w-100 justify-content-center p-0">
                <li class="nav-item active p-0 m-0">
                    <a class="nav-link" href="#">
                        <img src="{{ asset('static/landing/img/logo.png?').date('YmdHis') }}" class="w-75"></a>
                </li>
            </ul>

            <ul class="navbar-nav justify-content-around w-50">
                <li class="nav-item active">
                    <a class="nav-link" href="#">HOME </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="{{url('/')}}" id="navbarDropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CLASSES
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="classes">

                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="{{url('/')}}" id="navbarDropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SUBJECTS
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="subjects">

                    </div>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#">KCPE </a>
                </li>
{{--                <li class="nav-item ">--}}
{{--                    <a class="nav-link" href="#">KCSE </a>--}}
{{--                </li>--}}
                <li class="nav-item ">

                    <a class="nav-link login " href="{{url('signup')}}">REGISTER</a>

                </li>
                <li class="nav-item ">

                    <a class="nav-link login" href="{{url('signin')}}">LOGIN</a>

                </li>


            </ul>


        </div>

    </nav>

    <!-- sliders -->
    <div id="sliders">
        <div class="full-width">
            <!-- light slider -->
            <div id="light-slider" class="carousel slide">
                <div id="carousel-area">
                    <div id="carousel-slider" class="carousel slide" data-ride="carousel">

                        <div class="carousel-inner mt-5" role="listbox">
                            <div class="carousel-item active">
                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}" alt="">
                                <div class="carousel-caption">
                                    <h3 class="slide-title animated fadeInDown"><span class="red"> Keep Learning</span>
                                        - Anywhere Anytime</h3>
                                    <h5 class="slide-text animated fadeIn">We make learning easy, fun, engaging and
                                        accessible for every child</h5>
                                    <a href="{{url('signup')}}" class="btn btn-lg btn-common animated fadeInUp">Get Started</a>
                                    <a href="{{url('#about')}}" class="btn btn-lg btn-border animated fadeInUp">Learn More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End sliders -->

</header>
<!-- Header Area wrapper End -->
<!-- About Section End -->
<div id="feature" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-title wow fadeInDown animated" data-wow-delay="0.3s">Subjects</h2>
            </div>
        </div>
        <ul class="nav nav-pills mb-3 mx-5 col-12" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                   aria-controls="pills-home" aria-selected="true">Primary School</a>
            </li>
            {{--            <li class="nav-item">--}}
            {{--                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"--}}
            {{--                   aria-controls="pills-profile" aria-selected="false">High School</a>--}}
            {{--            </li>--}}
        </ul>
        <div class="tab-content border-0" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row" id="subjectList">

                </div>
            </div>
            {{--            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">--}}
            {{--                <div class="row">--}}

            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/math.png?').date('YmdHis') }}" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Mathematics</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/eng.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>English</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/chem.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Chemistry</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/phyc.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Physics</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/bio.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Biology</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/hist.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>History</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/geo.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Geography</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/agric.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Agriculture</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/comp.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Computer Studies</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/cre.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>CRE/IRE</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/bus.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Business Studies</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                    <div class="col-lg-3 col-md-6 col-xs-12">--}}
            {{--                        <div class="featured-box-item">--}}
            {{--                            <div class="featured-icon">--}}
            {{--                                <img src="{{ asset('static/landing/img/slider/bg-1.png?').date('YmdHis') }}img/prac.png" class="icons">--}}
            {{--                            </div>--}}
            {{--                            <div class="featured-content">--}}
            {{--                                <h4>Practicals</h4>--}}
            {{--                                <p>Form 1 to Form 4</p>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--            </div>--}}
        </div>

    </div>
</div>
<!-- About Section Start -->
<div id="about" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="about block text-center">
                    <img src="{{ asset('static/landing/img/image%20(1).png?').date('YmdHis') }}" alt="">
                    <h5><a href="#">Past Papers</a></h5>
                    <p>Get all the KCPE past papers from  2000 to date</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="about block text-center">
                    <img src="{{ asset('static/landing/img/image%20(2).png?').date('YmdHis') }}" alt="">
                    <h5><a href="#">Revision Materials</a></h5>
                    <p>Access revision materials for Primary Schools, MOCKs Past Papers with marking schemes.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="about block text-center">
                    <img src="{{ asset('static/landing/img/image%20(5).png?').date('YmdHis') }}" alt="">
                    <h5><a href="#">Prediction Questions</a></h5>
                    <p>We provide predictive questions and answers on all primary school subjects</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="about block text-center">
                    <img src="{{ asset('static/landing/img/image%20(4).png?').date('YmdHis') }}" alt="">
                    <h5><a href="#">Quick Test</a></h5>
                    <p>Take quick tests on the platform to help improve yourself.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Services Section Start -->
<section id="services" class="section-padding bg-light" style="display: none">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-title wow fadeInDown animated" data-wow-delay="0.3s">Important Notes</h2>
            </div>
        </div>
        <div class="row">
            <!-- Start Service Icon 1 -->
            <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                    <div class="service-icon">
                        <i class="fa fa-cogs"></i>
                    </div>
                    <div class="service-content">
                        <h4><a href="#"> Innovations to think about during this period</a></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis
                            consequuntur vero error excepturi.
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Service Icon 1 -->

            <!-- Start Service Icon 2 -->
            <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                    <div class="service-icon">
                        <i class="fa fa-book"></i>
                    </div>
                    <div class="service-content">
                        <h4><a href="#">Engaging with your teachers online</a></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis
                            consequuntur vero error excepturi.
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Service Icon 2 -->

            <!-- Start Service Icon 3 -->
            <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                    <div class="service-icon">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="service-content">
                        <h4><a href="#">Keeping track of your performance</a></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis
                            consequuntur vero error excepturi.
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Service Icon 3 -->

            <!-- Start Service Icon 4 -->
            <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                    <div class="service-icon">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="service-content">
                        <h4><a href="#">Improving Memorising capability</a></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis
                            consequuntur vero error excepturi.
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Service Icon 4 -->

            <!-- Start Service Icon 5 -->
            <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                    <div class="service-icon">
                        <i class="fa fa-folder-open"></i>
                    </div>
                    <div class="service-content">
                        <h4><a href="#">Things to avoid when studying from home</a></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis
                            consequuntur vero error excepturi.
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Service Icon 5 -->

            <!-- Start Service Icon 6 -->
            <div class="col-md-6 col-lg-4 col-xs-12">
                <div class="service-box">
                    <div class="service-icon">
                        <i class="fa fa-hand-pointer-o"></i>
                    </div>
                    <div class="service-content">
                        <h4><a href="#">Fact checking</a></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto officiis
                            consequuntur vero error excepturi.
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Service Icon 6 -->
        </div>
    </div>
</section>

<!-- Footer Section -->
<ul class="nav from text-center bg-light d-flex">

    <li class="nav-item ">
        <a class="nav-link px-0 fromtext" href="# ">E-Learning from <img
                src="https://www.standardmedia.co.ke/elearning/public/static/landing/images/STANDARD-REDESIGN-LOGO.png"
                class="footerlogo"></a>
    </li>
</ul>
<footer class="footer">
    <!-- Container Starts -->
    <div class="container">
        <div class="row">

            <div class="mx-auto col-xs-12">
                <ul class="nav nav-inline ">
                    <li class="nav-item">
                        <a class="nav-link active" href="http://www.btvkenya.ke/">BTV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="http://www.evewoman.co.ke/">
                            EVE WOMAN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="http://www.spicefm.co.ke/">
                            SPICE RADIO</a>
                    </li>
                    <li class="nav-item">

                        <a class="nav-link" href="http://www.travelog.ke/">TRAVEL</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="https://www.farmers.co.ke/">FARMERS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.digger.co.ke/">DIGGER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.vas.standardmedia.co.ke/">VAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.newsstand.standardmedia.co.ke/">EPAPER</a>
                    </li>
                    <li class="nav-item border-0">
                        <a class="nav-link" href="https://www.standardmedia.co.ke/corporate">CORPORATE</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Container Ends -->

    <!-- Copyright -->
    <div id="copyright">
        <div class="container text-center p-0">
            <div class="row p-0">
                <div class="col-12 mx-auto p-0">
                    <p class="text-center">© 2020 The Standard Group PLC All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright  End-->

</footer>
<!-- Footer Section End-->

<!-- Go to Top Link -->
<a href="#" class="back-to-top">
    <i class="fa fa-arrow-up"></i>
</a>

<script src="{{ asset('static/landing/js/jquery-min.js?').date('YmdHis') }}"></script>
<script src="{{ asset('static/landing/js/popper.min.js?').date('YmdHis') }}"></script>
<script src="{{ asset('static/landing/js/bootstrap.min.js?').date('YmdHis') }}"></script>
<script src="{{ asset('static/landing/js/main.js?').date('YmdHis') }}"></script>


<script>

    const imgSources = [
      'static/landing/img/math.png',
      'static/landing/img/eng.png',
      'static/landing/img/hist.png',
      'static/landing/img/cre.png',
      'static/landing/img/chem.png',
      'static/landing/img/cre.png',
    ];

    fetch('https://www.standardmedia.co.ke/elearning/public/api/classes/list', {
        method: 'GET'
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        data.forEach((el) => {
            let link = document.createElement("A");
            let link2 = document.createElement("A");

            link2.href = `app/exams/classes/${el.id}/subjects`;
            link.href = `app/exams/classes/${el.id}/subjects`;
            link2.text = el.class;
            link.text = el.class;
            link.className = "dropdown-item";
            document.getElementById('classes').appendChild(link);
            document.getElementById('classes1').appendChild(document.createElement("LI").appendChild(link2))
        });

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    fetch('https://www.standardmedia.co.ke/elearning/public/api/subjects/list', {
        method: 'GET'
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        data.forEach((el, index) => {
            if(index < 6) {
            let link = document.createElement("A");
            let link2 = document.createElement("A");

            link.href = `app/exams/subjects/${el.id}/modules`;
            link2.href = `app/exams/subjects/${el.id}/modules`;
            link.text = el.subject;
            link2.text = el.subject;
            link.className = "dropdown-item";
            document.getElementById('subjects').appendChild(link);
            document.getElementById('subjects1').appendChild(document.createElement("LI").appendChild(link2));


                let div0 = document.createElement("DIV");
                let div1 = document.createElement("DIV");
                let div2 = document.createElement("DIV");
                let div3 = document.createElement("DIV");
                div0.className = "col-lg-4 col-md-6 col-xs-12";
                div1.className = "featured-box-item";
                div2.className = "featured-icon";
                div3.className = "featured-content";

                let img = document.createElement("IMG");
                img.className = "icons";
                img.src = imgSources[index];
                div2.appendChild(img);


                let header = document.createElement("H4");
                header.appendChild(document.createTextNode(el.subject));
                let p = document.createElement("P");
                p.appendChild(document.createTextNode("Grade 1 to Grade 8."));
                div3.appendChild(header);
                div3.appendChild(p);
                div1.appendChild(div2);
                div1.appendChild(div3);
                div0.appendChild(div1);
                document.getElementById('subjectList').appendChild(div0);
            }
        });
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
</script>

</body>
</html>


<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="TemplateMo">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

    <title>Standard E-Learning</title>

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="{{ asset('/static/landing/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/static/landing/css/font-awesome.css') }}">
    <link rel="stylesheet" href="{{ asset('/static/landing/css/style.css?').date('YmdHis') }}">

    <style>
        .topnav .nav-link {
            color: #000000 !important;
        }

        footer .nav-link {
            color: rgb(15, 15, 15);
            font-weight: 500;
        }

        footer .nav {
            justify-content: space-around;
        }

        footer .nav-item {
            border-right: 1px solid #808080b8;
            font-size: 11px;
        }

        footer .card-body {
            color: #fff;
            background: #0f5ca8;
        }

        .navbar-brand {
            width: 100px;
            height: auto;
        }

        .from {
            justify-content: center !important;
        }

        .from .nav-item {
            border: none;
        }

        .from a {
            font-size: .9rem;
            font-family: Arial, Helvetica, sans-serif;
        }

        .fl-right {
            padding: 0;
        }

        .btnlogin {
            padding: 5px 7px;
            border: 1px solid #00000052;
            border-radius: 0;
            color: rgb(24, 24, 24);
            margin-right: 4px;
        }
        .navbar {
            padding: 0rem;
        }

        .dropdown .dropdown-menu {
            border-radius: 0;
        }

        @media (min-width: 768px) {
            .dropdown:hover .dropdown-menu {
                display: block;
                margin-top: 0;
                border-radius: 0;
            }
        }

        footer {
            padding-top: 0;
            background-image: url(../images/footer-bg.png);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            width: 100%;
            margin-top: 60px;
        }

        @media (max-width: 991px) {
            .logoimg {
                width: 36% !important;
                margin-left: 0;
            }
            .header-area {
                background-color: #f7f7f7;
                padding: 0px 15px;
                min-height: 60px !important;
                height: 60px !important;
                box-shadow: none;
                text-align: center;
            }
            .h1 {
                color: #0f5ca8;
                font: 35px sans-serif !important;
                font-weight: 800 !important;
                line-height: 1;
            }
            footer {
                padding-top: 0!important;
                background-image: url(../images/footer-bg.png);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                width: 100%;
                margin-top: 60px;
            }
            .nav-link {
                display: block;
                padding: .2rem .2rem;
                font-size: 9px;
            }
            footer span {
                font-size: 12px;
            }
            p {
                font-size: 14px;
                line-height: 1.5;
                color: #797979;
            }
            .features-item {
                border-radius: 5px;
                padding: 22px 11px;
                text-align: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            .icons,
            .icon {
                margin-top: 6%;
                height: 62px;
                width: 62px !important;
                object-fit: cover;
            }
            .icons {
                height: 84px !important;
                margin-top: -22px;
                width: 84px;
            }
        }

        .sender {
            padding: 14px 15px !important;
        }
    </style>


</head>

<body>

<nav class="navbar navbar-expand-md bg-white sticky-top pb-3">
    <!-- One of the primary actions on mobile is to call a business - This displays a phone button on mobile only -->




    <div class="collapse navbar-collapse flex-column  text-center" id="navbar">

        <ul class="navbar-nav w-100 justify-content-center px-3 ">

            <li>
                <a href="{{ url('/') }}" class="logo">
                    <img src="{{ asset('assets/img/elearning.png?').date('YmdHis') }}" class="logoimg" alt="Standard E-Learning"/>
                </a>
            </li>
        </ul>

        <ul class="navbar-nav justify-content-center w-100 bg-white px-3 ">
            <ul class="navbar-nav topnav justify-content-end w-100 px-3 container pt-0 ">

                <ul class="navbar-nav mr-auto w-100 text-black justify-content-space-between ">
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#slider-area ">
                            <i class="lni-search "></i>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#about "> Home</a></li>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#contact-us ">Contact Us</a>
                    </li>

                    <div class="span2 lwrap ">

                </ul>
                <ul class="navbar-nav mr-auto w-100 text-black justify-content-end ">
                    <li class="btn-group fl-right ">
                        <a href="{{ url('/register') }}" class="btn btn-default btnlogin "> <i class="fa fa-lock "></i> Login </a>
                        <a href="{{ url('/login') }}" class="btn btn-default btnlogin "> <i class="fa fa-user "></i> Register </a>
                    </li>

                </ul>

            </ul>


    </div>
    <div class="fixed-top d-flex  mx-2">
        <a class="float-left " href="index.html ">
            <img src="{{ asset('assets/img/elearning.png?').date('YmdHis') }}" class="logoimg mt-2 d-block d-md-none d-lg-none "></a>
        <button class="navbar-toggler float-right " type="button " data-toggle="collapse " data-target="#navbar " aria-controls="navbarTogglerDemo02 " aria-expanded="false " aria-label="Toggle navigation ">
            <i class="fa fa-bars "></i>
        </button></div>

</nav>

<div class="right-image-decor" id="about"></div>
<section class="section">
    <div class="container">

        <div class="left-text col-lg-8 offset-md-2 col-md-8 offset-lg-2 mb-5 text-center topp" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <h1 style="color: #0f5ca8;
                font: 50px sans-serif;
                font-weight: 800;
                line-height: 1;">The Standard
                <font style="color: #000000;"> E-learning</font>
            </h1>
            <p class="mt-3">
                Connect to more customers with a single interface and enjoy all the benefits of an industry-leading platform that ensures compliance and value. Increase customer interactions by sending sms at scale.


        </div>
    </div>
</section>

<footer style="color: #000000; background: linear-gradient(to bottom right, #510812, #bf1e2d); ">
    <ul class="nav from text-center bg-light ">
        <li class="nav-item mt-2 mr-1 ">
            <a class="nav-link px-0 " href="# ">VAS from </a>
        </li>
        <li class="nav-item ">
            <a class="nav-link px-0 " href="# "><img src="{{asset('static/landing/images/STANDARD-REDESIGN-LOGO.png')}}" class="navbar-brand "></a>
        </li>
    </ul>

    <div class="card text-center ">
        <div class="card-header p-2 ">
            <div class="container ">
                <ul class="nav text-center ">
                    <li class="nav-item ">
                        <a class="nav-link " href="# ">DIGGER</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="# ">BTV</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="# ">TRAVELOG</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#slider-area ">PULSER</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#services ">FARMERS</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#slider-area ">EVE WOMAN</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#services ">FM VYBEZ</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#slider-area ">SPICE RADIO</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link page-scroll " href="#services ">RADIO MAISHA</a>
                    </li>
                    <li class="nav-item border-0 ">
                        <a class="nav-link page-scroll " href="#slider-area ">CORPORATE</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-body p-2 ">
            <span>&copy; Copyright 2020 - Standard Group PLC</span>

        </div>
    </div>

</footer>

<!-- jQuery -->
<link rel="stylesheet" href="{{ asset('/static/landing/js/jquery-2.1.0.min.js') }}">

<!-- Bootstrap -->
<link rel="stylesheet" href="{{ asset('/static/landing/js/popper.js') }}">
<link rel="stylesheet" href="{{ asset('/static/landing/js/bootstrap.min.js') }}">

<!-- Plugins -->
<link rel="stylesheet" href="{{ asset('/static/landing/js/owl-carousel.js') }}">
<link rel="stylesheet" href="{{ asset('/static/landing/js/scrollreveal.min.js') }}">
<link rel="stylesheet" href="{{ asset('/static/landing/js/waypoints.min.js') }}">
<link rel="stylesheet" href="{{ asset('/static/landing/js/jquery.counterup.min.js') }}">
<link rel="stylesheet" href="{{ asset('/static/landing/js/imgfix.min.js') }}">
<!--Start of Tawk.to Script-->


<link rel="stylesheet" href="{{ asset('/static/landing/js/custom.js') }}">

<script type="text/javascript ">
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();

    (function() {

        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];

        s1.async = true;

        s1.src = 'https://embed.tawk.to/5e26fe888e78b86ed8aa5d7a/default';

        s1.charset = 'UTF-8';

        s1.setAttribute('crossorigin', '*');

        s0.parentNode.insertBefore(s1, s0);

    })();
</script>
</body>

</html>

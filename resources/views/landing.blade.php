
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
    <link rel="stylesheet" href="{{ asset('/static/landing/css/style.css') }}">


</head>

<body>

<header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a href="{{ url('/') }}" class="logo">
                        <img src="https://vas.standardmedia.co.ke/front-end/images/logo.png" class="logoimg" alt="Standard E-Learning"/>
                    </a>
                    <ul class="nav pb-3 p-md-0">

                        <li class="scroll-to-section"><a href="#about" class="menu-item">Home</a></li>
                        <li class="scroll-to-section"><a href="#contact-us" class="menu-item">Contact Us</a></li>
                        <li class="scroll-to-section"><a href="{{ url('/register') }}" class="">Register</a></li>
                        <li class="scroll-to-section"><a href="{{ url('/login') }}" class="">Login</a></li>

                    </ul>
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
</header>


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

<footer id="contact-us">
    <div class="container ">
        <div class="footer-content ">
            <div class="row ">
                <div class="col-lg-12 ">
                    <div class="sub-footer row ">
                        <div class="col-md-4 text-white mb-2 text-left ">
                            <h2 style=" font-size: 35px; font-weight: 600; ">Contact
                                <font style="color: #0f5ca8; ">Us</font>
                            </h2>
                            <ol>
                                <li>P.O Box 30080, 00100 Nairobi Kenya.</li>
                                <li>Tel: 0719012111, 3222111</li>
                            </ol>
                        </div>
                        <div class="col-md-4 mt-5 pt-3 ">
                            <p>Copyright &copy; 2020 Standard Group PLC
                                <a rel="nofollow " href="https://templatemo.com "></a>
                            </p>
                        </div>
                        <div class="col-md-4 mt-4 ">

                            <ul class="social ">
                                <li><a href="https://fb.com/templatemo "><i class="fa fa-facebook "></i></a></li>
                                <li><a href="# "><i class="fa fa-twitter "></i></a></li>
                                <li><a href="# "><i class="fa fa-instagram "></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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

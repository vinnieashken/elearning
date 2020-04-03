<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Tutor-Soma">
    <link rel="icon" href="{{asset('favicon.ico')}}">

    <title>Tutor-Soma</title>

    <link rel="apple-touch-icon" sizes="57x57" href="{{asset('static/app/images/favicon/apple-icon-57x57.png')}}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{asset('static/app/images/favicon/apple-icon-60x60.png')}}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{asset('static/app/images/favicon/apple-icon-72x72.png')}}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{asset('static/app/images/favicon/apple-icon-76x76.png')}}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{asset('static/app/images/favicon/apple-icon-114x114.png')}}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{asset('static/app/images/favicon/apple-icon-120x120.png')}}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{asset('static/app/images/favicon/apple-icon-144x144.png')}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('static/app/images/favicon/apple-icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('static/app/images/favicon/apple-icon-180x180.png')}}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{asset('static/app/images/favicon/android-icon-192x192.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('static/app/images/favicon/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{asset('static/app/images/favicon/favicon-96x96.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('static/app/images/favicon/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('static/app/images/favicon/manifest.json')}}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{asset('static/app/images/favicon/ms-icon-144x144.png')}}">
    <meta name="theme-color" content="#ffffff">

{{--    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">--}}
    <link href="{{ asset('static/app/css/bootstrap.min.css?').date('YmdHis') }}" rel="stylesheet">
    <link href="{{ asset('static/app/css/font-awesome.min.css?').date('YmdHis') }}" rel="stylesheet">
    <link href="{{ asset('static/app/css/animate.css?').date('YmdHis') }}" rel="stylesheet">
    <link href="{{ asset('static/app/css/main.css?').date('YmdHis') }}" rel="stylesheet">
    <link href="{{ asset('static/app/css/extras.css?').date('YmdHis') }}" rel="stylesheet">
    <link href="{{ asset('static/app/css/responsive.css?').date('YmdHis') }}" rel="stylesheet">

</head>
<body>
<div class="main h-100 w-100" id="app" >
</div>
<script type="text/javascript" src="{{ asset('static/app/js/jquery-3.4.1.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('static/app/js/popper.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('static/app/js/main.js') }}"></script>

</body>
<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register("{{ asset('static/app/js/service-worker.js') }}").then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            }).catch(function(err) {
                console.log(err)
            });
        });
    } else {
        console.log('service worker is not supported');
    }
</script>
<script type="text/javascript" src="{{ asset('static/bundles/main.js?').date('Ymdhis') }}"></script>

</html>

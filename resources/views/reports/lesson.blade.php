<html>
<head>

</head>
<body>
<div>
    <div style="width: 80%; margin:auto">
        <h1>CLASS 6</h1>

        @foreach($lessons as $item)
            <div style="width: 80%; margin:auto">
                <h1>{{ $item->topic}}</h1>
                <div>
                    {!! str_replace('src="lessons','src="'.url('/lessons'),$item->content) !!}
                </div>
            </div>
        @endforeach

    </div>
</div>

</body>
</html>

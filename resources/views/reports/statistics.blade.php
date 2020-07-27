
<html>
<head>

</head>
<body>
    <div>
        <div>

            @foreach($data as $key=>$value)
                <div>
                    <p>{{ $key}}</p>
                    <ul>
                    @foreach($value as $Keys=>$values)
                       <li>{{ $values['subject'] }}  {{ $values['modules'] }}</li>
                    @endforeach
                    </ul>
                </div>
            @endforeach

        </div>
    </div>

</body>
</html>

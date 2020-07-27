
<html>
<head>

</head>
<body>
    <div>
        <div>
           {{ dd($data) }}
            @foreach($data as $Key => $value)
                <div>
                    <p>{{ $key }}</p>
                    <ul>
                    @foreach($value as $Keys => $values)
                       <li>{{ $values[0] }}  {{ $values[1] }}</li>
                    @endforeach
                    </ul>
                </div>
            @endforeach
        </div>
    </div>

</body>
</html>

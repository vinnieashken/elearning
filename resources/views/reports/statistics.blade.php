
<html>
<head>

</head>
<body>
    <div>
        <div>
            {{ '' }}

            @foreach($data as $Key=>$value)
                <div>
                    <p>{{ 'hello '}}</p>
                    <ul>
                    @foreach($value as $Keys=>$values)
                       <li>{{ '' }}  {{ $values }}</li>
                    @endforeach
                    </ul>
                </div>
            @endforeach

        </div>
    </div>

</body>
</html>


<html>
<head>

</head>
<body>
<div>
    <div style="align-content: center">
        <div style="align-content: center">
            <form method="POST" action="{{ url('/lesson/add') }}" enctype="multipart/form-data">
                @csrf
                <input type="file" name="lessons" >
                <button type="submit">Submit</button>
            </form>
        </div>

    </div>
</div>

</body>
</html>

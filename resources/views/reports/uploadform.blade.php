
<html>
<head>

</head>
<body>
<style>
    .space{
        margin: 2% 2%;
    }
</style>
<div>
    <div style="width:80%;margin: auto">
        <div style="width:80%;margin: auto">
            <form method="POST" action="{{ url('/lesson/add') }}" enctype="multipart/form-data">
                @csrf
                <div class="space">
                    <label>Unit</label>
                    <input type="text" name="unit" required>
                </div>
                <div class="space">
                    <label>Class</label>
                    <input type="text" name="class" required>
                </div>
                <div class="space">
                    <label>Subject</label>
                    <input type="text" name="subject" required>
                </div>
                <div class="space">
                    <input type="file" name="lessons" required>
                </div>
                <div class="space">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>

    </div>
</div>

</body>
</html>

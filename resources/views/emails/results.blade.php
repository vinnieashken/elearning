<html>
<head>

</head>
<body>
<style>
    .mb-2{
        margin-bottom: 0.5rem;
    }
</style>
    <div style="width:80%; margin: auto; " >
        <div style="text-align: center" class="mb-2">
            Exam: {{  $results->Module }}
        </div>
        <div style="text-align: center" class="mb-2">
            Name: {{ $results->Name }}
        </div>
        <div style="text-align: center" class="mb-2">
            Score: {{  $results->Score }}  out of {{  $results->Questions }} questions.
        </div>
        <div style="text-align: center" class="mb-2">
            Percantage: {{  $results->Percentage }}%
        </div>
    </div>
</body>
</html>



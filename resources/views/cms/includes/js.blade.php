<script !src="">
    $(document).ready(function() {
        $(".summernote").summernote({
            height:150,
            tabsize: 2,
            lineHeight:1.5,
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript','fontname']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph','style']],
                ['height', ['height']],
                ['insert',['picture','link','video','table','hr']],
                ['misc',['codeview','undo','redo']]
            ]
        });

        $(document).on('submit', '.create-form', function (e) {
            e.preventDefault();
            var frm = $(this);
            $.ajax({
                type: 'POST',
                url: frm.attr('action'),
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: $(this).serialize(),
                success: function (Mess) {
                    if (Mess.status == true) {
                        $($(this).data('modal')).modal('toggle');

                        toastr.success(Mess.msg, Mess.header, {
                            timeOut: 1000,
                            closeButton: true,
                            progressBar: true,
                            newestOnTop: true,
                            onHidden: function () {
                                frm.trigger("reset");
                                window.location.reload();
                            }
                        });


                    } else {
                        toastr.error(Mess.msg, Mess.header, {
                            timeOut: 1000,
                            closeButton: true,
                            progressBar: true,
                            newestOnTop: true
                        });
                    }
                },
                error: function (f) {
                    console.log(f);
                    $.each(f.responseJSON.errors, function (key, val) {
                        toastr.error(val[0], f.responseJSON.message, {
                            timeOut: 1000,
                            closeButton: true,
                            progressBar: true,
                            newestOnTop: true,
                            onHidden: function () {
                                window.location.reload();
                            }
                        });

                    });


                }
            });

        });
        $(document).on('click','.edit-class',function(e){
            e.preventDefault();
            var level = $(this).data('level');

            $('#edit-id').val(level.id);
            $('#edit-classroom').val(level.class);
            $('#editModal').modal('toggle');
        });
        $(document).on('click','.edit-module',function(e){
            e.preventDefault();
            var module = $(this).data('module');

            $('#edit-id').val(module.id);
            $('#edit-module').val(module.module);
            $('#edit-subject option[value="'+module.subject_id+'"]').attr("selected","selected");

            $('#editModal').modal('toggle');
        });
        $(document).on('click','.edit-subject',function(e){
            e.preventDefault();
            var subject = $(this).data('subject');
            $("#edit-id").val(subject.id);
            $('#edit-class option[value="'+subject.class_id+'"]').attr("selected","selected");
            $('#edit-subject').val(subject.subject);

            $('#editModal').modal('toggle');
        });
        var str = $( ".m-class option:selected" ).val();
        $.ajax({
            type: 'POST',
            url: '<?=url('subjectfromclass'); ?>',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data:{'class_id':str},
            success: function (Mess) {
                $('.m-subject').append(Mess);
            },
            error: function (f) {
                console.log(f);
            }
        });
        $(document).on('change','.m-class',function() {
            var str = $( "select option:selected" ).val();
            $.ajax({
                type: 'POST',
                url: '<?=url('subjectfromclass'); ?>',
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data:{'class_id':str},
                success: function (Mess) {
                    $('.m-subject').append(Mess);
                },
                error: function (f) {
                    console.log(f);
                }
            });

        });
        $(document).on('click','.choicebtn',function(e){
            e.preventDefault();
            var choices = $('#noc').val();
            $.ajax({
                type: 'POST',
                url: '<?=url('choices'); ?>',
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data:{'choices':choices},
                success: function (Mess) {
                    $('.choices').html(Mess);
                },
                error: function (f) {
                    console.log(f);
                }
            });

        });



        $('#classes').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
                "url": "{{ url('get_classes') }}",
                "dataType": "json",
                "type": "POST",
                "data":{ _token: "{{csrf_token()}}"}
            },
            "columns": [
                            { "data": "id" },
                            { "data": "class" },
                            { "data": "created_at" },
                            { "data": "action"}
                        ]

        });
        $('#module').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
                "url": "{{ url('get_modules') }}",
                "dataType": "json",
                "type": "POST",
                "data":{ _token: "{{csrf_token()}}"}
            },
            "columns": [
                { "data": "id" },
                { "data": "level"},
                { "data": "subject" },
                { "data": "module" },
                { "data": "action"}
            ]

        });
        $('#subject').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
                "url": "{{ url('get_subjects') }}",
                "dataType": "json",
                "type": "POST",
                "data":{ _token: "{{csrf_token()}}"}
            },
            "columns": [
                { "data": "id" },
                { "data": "class" },
                { "data": "subject" },
                { "data": "action"}
            ]

        });
        $('#questions').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
                "url": "{{ url('get_questions') }}",
                "dataType": "json",
                "type": "POST",
                "data":{ _token: "{{csrf_token()}}"}
            },
            "columns": [
                { "data": "*" },
                { "data": "module" },
                { "data": "question" },
                { "data": "action"}
            ]

        });

    });
</script>

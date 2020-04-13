<script !src="">

       $(document).on('click','.qbtn',function(){
           $(".choices").html("");

       });

        $(document).on('submit', '.create-form', function (e) {
            e.preventDefault();
            var frm = $(this);
            $.ajax({
                type: 'POST',
                url: frm.attr('action'),
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: $(e.target).serialize(),
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
        $(document).on('submit', '.add-question', function (e) {
            e.preventDefault();
            var frm = $(this);
            frm.append($('.choices')).addClass('d-none');


            $.ajax({
                type: 'POST',
                url: frm.attr('action'),
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: frm.serialize(),
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
                                $('.choices').html("");
                                window.location.reload();
                            }
                        });


                    } else {
                        toastr.error(Mess.msg, Mess.header, {
                            timeOut: 1000,
                            closeButton: true,
                            progressBar: true,
                            newestOnTop: true,
                            onHidden: function () {
                                frm.remove($('.choices'));
                            }
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
                                frm.remove($('.choices'));
                                window.location.reload();
                            }
                        });

                    });


                }

            });

        });

       $(document).on('click','.edit-rate',function(e){
           e.preventDefault();
           var rate = $(this).data('rate');
           $('#edit-id').val(rate.id);
           $('#edit-subscription').val(rate.subscription);
           $('#edit-days').val(rate.days);
           $('#edit-description').summernote('code',rate.description);
           $('#edit-cost').val(rate.cost);
           $('#editModal').modal('toggle');
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
        $(document).on('click','.edit-question',function(e){
            e.preventDefault();
            var question = $(this).data('question');
            $('#edit-id').val(question.id);
            $('#edit-question_no').val(question.listorder);
            $('#edit-question').summernote('code',question.question);
            $.ajax({
                type: 'POST',
                url: '<?=url('questionanswers'); ?>',
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data:{'question_id':question.id},
                success: function (Mess) {
                    $('.choices').html(Mess).find(".ans-editor").summernote({
                        height:100,
                        tabsize: 2,
                        lineHeight:1.5,
                        dialogsInBody: true,
                        dialogsFade: false,
                        toolbar: [
                            ['fontsize', ['fontsize']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['insert',['table','image']],

                        ],
                        callbacks : {
                            onImageUpload: function(dt) {
                                var image = dt[0];
                                var dat = new FormData();
                                dat.append("image",image);
                                var IMAGE_PATH = '<?=asset('uploads').'/'; ?>';
                                $.ajax ({
                                    data: dat,
                                    type: "POST",
                                    url:  '<?=url('upload'); ?>',
                                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    success: function(url) {
                                        var image = IMAGE_PATH+$.trim(url);
                                        $('.summernote').summernote("insertImage", image,function ($image) {
                                            $image.attr('class', 'image-fluid');
                                        });
                                    },
                                    error: function(e) {
                                        toastr.error(e, 'upload', {
                                            timeOut: 1000,
                                            closeButton: true,
                                            progressBar: true,
                                            newestOnTop: true

                                        });
                                    }
                                });

                            }
                        }
                    }).on('summernote.change', function(we, contents, $editable) {
                        $(this).val(contents);
                    });
                },
                error: function (f) {
                    console.log(f);
                }
            });
            $(".ans-editor").summernote({
                height:100,
                tabsize: 2,
                lineHeight:1.5,
                dialogsInBody: true,
                dialogsFade: false,
                toolbar: [
                    // [groupName, [list of button]]

                    ['font', ['strikethrough', 'superscript', 'subscript','fontname']],
                    ['fontsize', ['fontsize']],

                    ['para', ['ul', 'ol', 'paragraph','style']],

                    ['insert',['table','picture']],

                ]
            }).on('summernote.change', function(we, contents, $editable) {
                $(this).val(contents);
            });
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
                $('.m-subject').html(Mess);
            },
            error: function (f) {
                console.log(f);
            }
        });
        $(document).on('change','.m-class',function() {
            var str = $(this).val();
            $.ajax({
                type: 'POST',
                url: '<?=url('subjectfromclass'); ?>',
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data:{'class_id':str},
                success: function (Mess) {
                    $('.m-subject').html(Mess);
                },
                error: function (f) {
                    console.log(f);
                }
            });
        });

        $(document).on('click','.choicebtn',function(e){
            e.preventDefault();
            var choices = $('#noc').val();
            var choicegrp = $('#ansgrp').val();
            if(choices != '') {
                $(this).parent().parent().remove();
                $.ajax({
                    type: 'POST',
                    url: '<?=url( 'choices' ); ?>',
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    data: {'choices': choices,'choicegrp':choicegrp},
                    success: function (Mess) {
                        $('.choices').html(Mess).find(".ans-editor").summernote({
                            height: 100,
                            tabsize: 2,
                            lineHeight: 1.5,
                            dialogsInBody: true,
                            dialogsFade: false,
                            toolbar: [
                                ['fontsize', ['fontsize']],
                                ['para', ['ul', 'ol', 'paragraph']],
                                ['insert', ['table', 'picture']],

                            ],
                            callbacks: {
                                onImageUpload: function (dt) {
                                    var image = dt[0];
                                    var dat = new FormData();
                                    dat.append("image", image);
                                    var IMAGE_PATH = '<?=asset( 'uploads' ) . '/'; ?>';
                                    $.ajax({
                                        data: dat,
                                        type: "POST",
                                        url: '<?=url( 'upload' ); ?>',
                                        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                                        cache: false,
                                        contentType: false,
                                        processData: false,
                                        success: function (url) {
                                            var image = IMAGE_PATH + $.trim(url);
                                            $('.summernote').summernote("insertImage", image, function ($image) {
                                                $image.attr('class', 'image-fluid');
                                            });
                                        },
                                        error: function (e) {
                                            toastr.error(e, 'upload', {
                                                timeOut: 1000,
                                                closeButton: true,
                                                progressBar: true,
                                                newestOnTop: true

                                            });
                                        }
                                    });

                                }
                            }
                        }).on('summernote.change', function (we, contents, $editable) {
                            $(this).val(contents);
                        });
                    },
                    error: function (f) {
                        console.log(f);
                    }
                });
            }

        });
        $(document).on('click','.usermgt',function(e){
            e.preventDefault();
            var user = $(this).data('user');
            var type = $(this).data('type');
            $.ajax({
                type: 'POST',
                url: '<?=url('cms/usermgt'); ?>',
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data:{'id':user.id,'type':type},
                success: function (Mess) {
                    toastr.success('Transaction Successful', 'User Manipulation', {
                        timeOut: 1000,
                        closeButton: true,
                        progressBar: true,
                        newestOnTop: true,
                        onHidden: function () {

                            window.location.reload();
                        }
                    });
                },
                error: function (f) {
                    console.log(f);
                }
            });
        });
        $(document).ready(function() {
            $(".summernote").summernote({
                height:150,
                tabsize: 2,
                lineHeight:1.5,
                dialogsInBody: true,
                dialogsFade: false,
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
                ],
                callbacks : {
                                onImageUpload: function(image) {
                                                                    uploadImage(image[0]);

                                                                }
                            }
            }).on('summernote.change', function(we, contents, $editable) {
                $(this).val(contents);
            });
        function uploadImage(image)
            {
                //console.log(image);
                var dat = new FormData();
                dat.append("image",image);
                var IMAGE_PATH = '<?=asset('uploads').'/'; ?>';
                $.ajax ({
                    data: dat,
                    type: "POST",
                    url:  '<?=url('upload'); ?>',
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(url) {
                        var image = IMAGE_PATH+$.trim(url);
                        $('.summernote').summernote("insertImage", image,function ($image) {
                              $image.attr('class', 'image-fluid');
                            });
                        },
                        error: function(e) {
                                                toastr.error(e, 'upload', {
                                                timeOut: 1000,
                                                closeButton: true,
                                                progressBar: true,
                                                newestOnTop: true

                                            });
                            }
                    });
            }

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
        $('#rates').DataTable({
                "processing": true,
                "serverSide": true,
                "ajax":{
                    "url": "{{ url('get_rates') }}",
                    "dataType": "json",
                    "type": "POST",
                    "data":{ _token: "{{csrf_token()}}"}
                },
                "columns": [
                    { "data": "*" },
                    { "data": "subscription" },
                    { "data": "days" },
                    { "data": "description" },
                    { "data": "cost" },
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
                "headers": {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                "data":{ "id":"{{ $module_id ?? ''}}"}
            },
            "columns": [
                { "data": "*" },
                { "data": "question" },
                { "data": "action"}
            ]

        });
            $('#users').DataTable({
                "processing": true,
                "serverSide": true,
                "ajax":{
                    "url": "{{ url('get_users') }}",
                    "dataType": "json",
                    "type": "POST",
                    "data":{ _token: "{{csrf_token()}}"}
                },
                "columns": [
                    { "data": "*" },
                    { "data": "name" },
                    { "data": "email" },
                    { "data": "phoneno" },
                    { "data": "status" },
                    { "data": "action"}
                ]

            });
    });
    $(document).on("show.bs.modal", '.modal', function (event) {
    console.log("Global show.bs.modal fire");
    var zIndex = 100000 + (10 * $(".modal:visible").length);
    $(this).css("z-index", zIndex);
    setTimeout(function () {
        $(".modal-backdrop").not(".modal-stack").first().css("z-index", zIndex - 1).addClass("modal-stack");
    }, 0);
    }).on("hidden.bs.modal", '.modal', function (event) {
        console.log("Global hidden.bs.modal fire");
        $(".modal:visible").length && $("body").addClass("modal-open");
    });
    $(document).on('inserted.bs.tooltip', function (event) {
        console.log("Global show.bs.tooltip fire");
        var zIndex = 100000 + (10 * $(".modal:visible").length);
        var tooltipId = $(event.target).attr("aria-describedby");
        $("#" + tooltipId).css("z-index", zIndex);
    });
    $(document).on('inserted.bs.popover', function (event) {
        console.log("Global inserted.bs.popover fire");
        var zIndex = 100000 + (10 * $(".modal:visible").length);
        var popoverId = $(event.target).attr("aria-describedby");
        $("#" + popoverId).css("z-index", zIndex);
    });
</script>

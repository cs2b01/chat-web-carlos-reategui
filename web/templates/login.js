function getData(){
        $('#fail').hide();
        $('#ok').hide()
        $('#loading').show();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                $('#action').html(response['statusText']);
                $('#loading').hide();
                $('#ok').show();
                window.location.href="http://127.0.0.1:5000/"
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#loading').hide();
                $('#fail').show();
            }
        });
    }
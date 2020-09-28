
$(document).ready(function () {
    $('#bromear').click(function (e) { 
        e.preventDefault();

        $.ajax({
            type: "get",
            url: "http://api.icndb.com/jokes/randomurl",
            
            dataType: "json",
            success: function (data) {
                console.log(data.value.joke);
                $('#joke').html(
                    `<h2>${data.value.joke}</h2>
                    `
                );
            },
            error:function(xhr, status, error){
                console.log(error);
            }
        });
        
    });


});

$(document).ready(function () {
    $("#leer").click(function (e) { 
        e.preventDefault();
       
        $.get("archivo.txt",
            function (data, textStatus, jqXHR) {
                console.log(data);
               
            },
        );
    });

    $("#leerArt").click(function (e) { 
        e.preventDefault();
        $.get("articulo.json",function (data) {
            console.log(data);
            $("#datos").html(`
            titulo: ${data.titulo} </br>
            descripcion: ${data.descripcion}</br>
            cantidad: ${data.cantidad}</br>
            `
            );    
            },
            
        );
    });

    /* $('#leerArts').click(function (e) { 
        e.preventDefault();
        $('#datosArts').html('');
        $.get("articulos.json",function (data) {
            $.each(data, function (index, item) { 
                $('#datosArts').html($('#datosArts').html()+`
                <li>${item.titulo}--${item.descripcion}</li>
                `);  
            });
            },  
        );
    }); */


    $('#leerObje').click(function (e) { 
        e.preventDefault();
        $('#datosArts').html('');
        $.get("articulos1.json",function (data) {
            console.log(data);
            $.each(data.categorias, function (index, item) { 
                $('#datosArts').html($('#datosArts').html()+`
                <li>${item.titulo}--${item.descripcion}</li>
                `);  
            });
            },  
        );
    });

    let articulos;

    $.getJSON("articulos1.json",
        function (data) {
            articulos=data.articulos;
        }
    );
    
    $('#titulo').keyup(function (e) { 
        $('#datosArts').html('');
        let titulo =$(this).val()
        $.each(articulos, function (indexInArray, item) { 
            if(item.titulo.toLowerCase().indexOf(titulo.toLowerCase())!==-1){
                $('#datosArts').html($('#datosArts').html()+`
            <li>${item.titulo}--${item.descripcion}</li>
            `);  
            }
            
             
        });
        
    });


});
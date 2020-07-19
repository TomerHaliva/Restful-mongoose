$(document).ready(function () {
   
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const albumid = urlParams.get('albumid')
    console.log(albumid);
    
    $('#photo_form').submit(function (event) {
        if(!$("#photo_form").valid()) return;
        
      
        $.ajax({
            type: 'PUT', 
            url: `http://localhost:3001/albums/${albumid}`, 
            contentType: 'application/json',
            data: JSON.stringify({
              "name": $("#PhotoName").val(),
              "photographer": $("#PhotographerName").val(),
              "link": $("#link").val(),
            }),
            
            processData: false,            
           
            encode: true,
            success: function( data, textStatus, jQxhr ){
                console.log(data);
                $('#photo_form')[0].reset();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        })
          
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});

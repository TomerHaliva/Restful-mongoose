$(document).ready(function () {
   
    
    // process the form
    $('#album_form').submit(function (event) {
        if(!$("#album_form").valid()) return;
        
        $.ajax({
          url: 'http://localhost:3001/users',
          type: 'get',
          dataType: 'json',
          jsonp: 'json',
          success: myCallback,
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);
          }
        })
        
        function myCallback(response){
          for(i=0;i<response.length; i++){
            if(response[i].email == $("#email").val()){
              $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: 'http://localhost:3001/albums', // the url where we want to POST
                contentType: 'application/json',
                data: JSON.stringify({
                  "name": $("#username").val(),
                  "type": $("#type").val(),
                  "email": $("#email").val(),
                  "author": response[i]._id
                }),
                processData: false,            
                // dataType: 'json', // what type of data do we expect back from the server
                 encode: true,
                 success: function( data, textStatus, jQxhr ){

                     
                     $('#album_form')[0].reset();
                 },
                 error: function( jqXhr, textStatus, errorThrown ){
                     console.log( errorThrown );
                 }
             })
            }
            else{
              console.log("email doesnt match");
            }
              
          }
        }
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});

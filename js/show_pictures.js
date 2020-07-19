$(document).ready(function () {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const albumid = urlParams.get('albumid')
    console.log(albumid);

    $.ajax({
        url: `http://localhost:3001/albums/${albumid}`, success: function (result) {
            console.log(result);
            var index = 1;
            for (var key in result) {
                var item = result[key];
                console.log(item);
                $(".tilesWrap").append("<ul id ="+"photo"+ +index+ "></ul>");
                var id = item._id;	
                var li = '<li>'+'<h3>'+item.name+'</h3>'+'<p>'+item.photographer+'</p>'+'<img src='+item.link+'>';
                key++;       
                $("#photo"+index).append(li);
                index++;
                console.log(item);
            } 
             
            
        },
        error: function (err){
            console.log(err); 
        }
    });

    
});
    

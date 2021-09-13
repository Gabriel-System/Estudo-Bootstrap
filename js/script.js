$(function(){
    $.ajax({
        url:'http://makeup-api.herokuapp.com/api/v1/products.json',
        type:'GET',
        dataType:'json',
        success:function(json) {
            console.log(json);
        }
    });

});
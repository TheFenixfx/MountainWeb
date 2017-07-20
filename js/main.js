

$(document).ready(function(){


$(".navbar-custom  li ").on("click",function(){           
       $(".navbar-custom  li span font").attr("color","white");  
       $(this).find("font").attr("color","black");               
});

$("#imgCarrusel").on("click",function(){           
       $(".navbar-custom  li span font").attr("color","white");           
});

$("#articles").on("click",function(){           
       $(".navbar-custom  li span font").attr("color","white");               
});


});
       

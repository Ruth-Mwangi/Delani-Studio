$(document).ready(function(){
    //what we do
    $(".design").click(function(){
        $("#show-design").fadeToggle();
        $("#hide-design").fadeToggle();

    });
    $(".development").click(function(){
        $("#show-development").fadeToggle();
        $("#hide-development").fadeToggle();

    });
    $(".product-management").click(function(){
        $("#show-product").fadeToggle();
        $("#hide-product").fadeToggle();
    });

    // portfolio hover
    $("#portfolio-container img").hover(function(){
        var x=(this.id);
        
        $("#hide-"+x).show();

    },function(){
        
        var x=(this.id);
        $(".hide").hide();
                
    });

});

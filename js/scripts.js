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
    

        switch (x){
            case "portfolio-1":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-1").css("background","url(../images/portfolio/work4.jpg)")
                $("#hide-portfolio-1").show();
                
                break;
            case "portfolio-2":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-2").css("background","url(../images/portfolio/work3.jpg)")
                $("#hide-portfolio-2").show();
                break;
            case "portfolio-3":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-3").css("background","url(../images/portfolio/work2.jpg)")
                $("#hide-portfolio-3").show();
                break;
            case "portfolio-4":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-4").css("background","url(../images/portfolio/work1.jpg)")
                $("#hide-portfolio-4").show();
                break;
            case "portfolio-5":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-5").css("background","url(../images/portfolio/work5.jpg)")
                $("#hide-portfolio-5").show();
                break;
            case "portfolio-6":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-6").css("background","url(../images/portfolio/work6.jpg)")
                $("#hide-portfolio-6").show();
                break;
            case "portfolio-7":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-7").css("background","url(../images/portfolio/work7.jpg)")
                $("#hide-portfolio-7").show();
                break;
            case "portfolio-8":
                $("#"+x).hide();
                $("#portfolio-container #hide-portfolio-8").css("background","url(../images/portfolio/work8.jpg)")
                $("#hide-portfolio-8").show();
                break;
            default:
                break;
        }
    
    },function(){
        
        var x=(this.id);
        switch (x){
            case "portfolio-1":
                $("#"+x).show();
                $("#hide-portfolio-1").hide();
                
                break;
            case "portfolio-2":
                $("#"+x).show();
                $("#hide-portfolio-2").hide();
                break;
            case "portfolio-3":
                $("#"+x).show();
                $("#hide-portfolio-3").hide();
                
                break;
            case "portfolio-4":
                $("#"+x).show();
                $("#hide-portfolio-4").hide();
                break;
            case "portfolio-5":
                $("#"+x).show();
                $("#hide-portfolio-5").hide();
                
                break;
            case "portfolio-6":
                $("#"+x).show();
                $("#hide-portfolio-6").hide();
                break;
            case "portfolio-7":
                $("#"+x).show();
                $("#hide-portfolio-7").hide();
                
                break;
            case "portfolio-8":
                $("#"+x).show();
                $("#hide-portfolio-8").hide();
                break;
            default:
                break;
        }
        
    });

    // capturing form input

    $("#form-container form").submit(function(event){
        var arrays=["name","email","message"];
        
        arrays.forEach(function(array){
            var myInput=$("#"+array).val();
            if(array==="name"&&myInput===""){
                alert("Please insert name before sending");
                $("#"+array)[0].reset();
                return false;
                
            }
            if(array==="email"&&myInput===""){
                alert("Please insert email before sending");
                $("#"+array)[0].reset();
                return false;
                
            }
            if(array==="message"&&myInput===""){
                alert("Please insert message before sending");
                $("#"+array)[0].reset();
                return false;
            }
            if(array==="name"&&myInput!==""){
                alert(myInput+", we have received your message. Thank you for reaching out to us.");

            }
            
        });

        $("#form")[0].reset();
        event.preventDefault();

    });
    

    

    
    

});
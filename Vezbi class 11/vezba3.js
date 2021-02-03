//Create Menu otion which will have 3 Option
//(starting,increased,reduce),
//after clicking every one of them 
//it will afect the font in the paragraph.

$("#pocetna").css("background-color","lightblue");
$("#zgolemi").css("background-color","lightblue");
$("#namali").css("background-color","lightblue");

$("#pocetna").click(function() {
    $("#paragraph1").css("style","display-none",).show();
    $("#paragraph2").hide();
    $("#paragraph3").hide();
});

$("#zgolemi").click(function() {
    $("#paragraph1").hide();
    $("#paragraph2").css("font-size","30px").show();
    $("#paragraph3").hide();
});

$("#namali").click(function(){
    $("#paragraph1").hide();
    $("#paragraph2").hide();
    $("#paragraph3").css("font-size","10px").show();
});


//Create navigation Menu with 3 options.
//Initially on loading the page the first will be showed.
//After clicking on another Optionthe currently
//active content will be hiden and the selected one will be showen.
$(document).ready(function() {
$("#image1").show();
$("#image2").hide();
$("#image3").hide();
$("#animal").change("click",function() {
    if($("#animal").val()==="current"){
    $("#image1").show();
    $("#image2").hide();
    $("#image3").hide();
    }
    else if($("#animal").val()==="archived"){
    $("#image1").hide();
    $("#image2").show();
    $("#image3").hide();
    }
    else if($("#animal").val()==="upcoming"){
     $("#image1").hide();
     $("#image2").hide();
     $("#image3").show();  
    }

});
});
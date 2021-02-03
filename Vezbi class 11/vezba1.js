//1.Create input form which will contain info about 
//book(Name,Author,Telephone,Date). 
//After clicking on the add button the book will be 
//inserted into unordered list.
$(document).ready(function(){
$("button").click(function () {

    let nameOfBook=$("#nameOfBook").val();
    let nameofAutor=$("#nameOfAuthor").val();
    let telephone=$("#telephone").val();
    let date=$("#date").val();

    $("ul").append(`<h3>Result:</h3>
    <li>Nnaslov na knigata: ${nameOfBook}</li>
    <li>Nnaslov na knigata: ${nameofAutor}</li>
    <li>Nnaslov na knigata: ${telephone}</li>
    <li>Nnaslov na knigata: ${date}</li>`)
});
});
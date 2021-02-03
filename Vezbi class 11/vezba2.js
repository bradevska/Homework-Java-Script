//2.Create table which will have info about 
//cars(Licence plates,Model,Color). Every even row 
//will have red color and every first and last td border 
//will have background color.

let byTagNameElements=$("tr");
console.log(byTagNameElements);
let firstChild=$("th:first-child");
console.log(firstChild);
$("th:first-child").css("background-color","gray");
$("th:last-child").css("background-color","gray");
$("td:first-child").css("background-color","gray");
$("td:last-child").css("background-color","gray");
$("tr:even").css("color","red");

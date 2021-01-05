
let userInput = prompt("Enter you birthday mm/dd/yyyy");

var stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

let birthdayDay = date.getDate();
let birthdayMonth = date.getMonth() +1;
let birthdayYear = date.getFullYear();

let todayDate = new Date();


let todayDay = todayDate.getDate();
let todayMonth = todayDate.getMonth () +1;
let todayYear = todayDate.getFullYear();

if (todayYear - birthdayYear <=17) {
    console.log ("Maloleten");
}
else if (( todayYear - birthdayYear == 18) && (birthdayMonth > todayMonth )) {
    console.log ("Maloleten")
}
else if ((todayYear - birthdayYear == 18) && (birthdayMonth == todayMonth) &&(birthdayDay > todayDay)) {
    console.log ("Maloleten ")
}
else if (todayYear-birthdayYear > 18 ) {
    console.log ( "Polnoleten")
}
else if ((todayYear - birthdayYear == 18) && (birthdayMonth < todayMonth )) {
    console.log ("Polnoleten")
}
else if ((todayYear - birthdayYear == 18) && (birthdayMonth == todayMonth) && (birthdayDay <= todayDay)){
    console.log("Polnoleten")
}




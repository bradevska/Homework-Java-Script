//Write a javascript function that:
//When given 2 arrays of students firstNames and lastNames 
//will return a new array with students full names
//Every name should have a numeric value before it
//Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
//Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstName=["Petar","Viktor"];
let lastName=["Velkov","Pesevski"];
let numbers=[1,2];
let fullName=[numbers[0]+ "." + firstName[0] +" "+ lastName[0]+ " " + 
numbers[1] + "."+ firstName[1]+ " " +lastName[1]];

console.log(fullName);

//Probuvav i na vtoriov nacin nekako ali ne mi uspea:
//let person=[
 // {firstName : "Petar",lastName :"Velkov"},
 // {firstName : "Viktor", lastName : "Pesevski"},
//]
//function fullName(item) {
  //let fullName=[item.firstName,item.lastName].join(" ")
  //return fullName;
  //console.log(fullName);
//}
//function myFunction() {
 // person.map(fullName);
//}



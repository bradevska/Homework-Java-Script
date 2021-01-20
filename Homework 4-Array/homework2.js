//First
let numbers=[125,5,17,45,100];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total+value;
  }
  console.log("The sum of Array is"+ " " + sum);

//Secound 
let arrayOfnumbers=[125,5,17,45,100];
let a=arrayOfnumbers[0];
let b=arrayOfnumbers[1];
let c=arrayOfnumbers[2];
let d=arrayOfnumbers[3];
let e=arrayOfnumbers[4];
let result=a+b+c+d+e;
console.log(arrayOfnumbers);
console.log(arrayOfnumbers.length);
console.log(result);

//BONUS
//let array=[1,2,"name", 4, "My name is Biljana",100,0,NaN,undefined];
//console.log(array);
//for (i in array) {
//if (typeof array[i]==="number"){
//   console.log(array[i]);
//}
//else {
//   console.log("Wrong number");
//};
//};


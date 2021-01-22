
//Write a function that will take an array of 5 
//numbers as an argument and return the sum.
//Print it in the console or in alert
//BONUS: Write another function called validateNumber() 
//that checks if a number is a valid number and call it for every number. 
//If one of the numbers of the array is invalid show an error 
//message instead of a result.
//Secound 


//function sumOfArrayNumbers(a,b,c,d,e) {
  //let arrayOfnumbers=[];

  //arrayOfnumbers[0]=a;
  //arrayOfnumbers[1]=b;
  //arrayOfnumbers[2]=c;
  //arrayOfnumbers[3]=d;
  //arrayOfnumbers[4]=e;
  //let sum=arrayOfnumbers[0] + arrayOfnumbers [1] + arrayOfnumbers[2] + arrayOfnumbers[3] + arrayOfnumbers[4];
  //console.log(sum);
//}
//let firstNumber=parseInt(prompt("enter first number"));
//let secoundNumber=parseInt(prompt("enter second number"));
//let thirdNumber=parseInt(prompt("enter third number"));
//let fourthNumber=parseInt(prompt("enter fourth number"));
//let fifthNumber=parseInt(prompt("enter fifth number"));


//sumOfArrayNumbers(firstNumber,secoundNumber,thirdNumber,fourthNumber,fifthNumber);



//BONUS
let array=[1,2,"name", 4, "My name is Biljana",100,0,[1,2,3,4],NaN,undefined];
console.log(array);
for (i in array) {
if(typeof(Number(i))==="number"){
   let x=array[i];
   console.log(typeof x);
}
else {
   console.log("error");
};
};


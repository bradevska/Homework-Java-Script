//Number
function sumOfNumber(num1,num2) {
let result=num1+num2;
console.log(result);
}
sumOfNumber(45,70);      
sumOfNumber(45);//NaN

//string
function myFullName(messege) {
    document.write(messege);
}
myFullName("Biljana Radevska");

//object
let car="Citroen"
let type="Air Cross 5"
let color="white"
console.log("My car is"+ " " + car + " " + type + " " + "color" + " " + color);

//boolean
function myNumbers(x,y) {
let result1=x*y;
let result2=x+y;
if(result2>result1)
console.log(true);
else
console.log(false);
}
myNumbers(10,5);

//undefined
function numbers(){
    let x;
    console.log(x);
}
numbers();
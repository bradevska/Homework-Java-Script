//Title: Looping structures
//Description: Write a loop in JavaScript that in range 
//from 1 till 20 will write in the console every number, 
//and will add the "\n" new line after every even number 
//otherwise it will add " " empty space.

let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
number[number.length]=19;
number[number.length+1]=20;
console.log(number);
var text="";
var i;
var empty="";
for(i=0; i<=20; i++) {
  text+="Number is" + "  " + i + "\n" ;
}
console.log(text);



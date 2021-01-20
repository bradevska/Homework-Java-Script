//Write a javascript function that:
//When given any array of strings (should work with array 
//with any number of elements)
//It will create one big string and return it
//Ex:["Hello", "there", "students", "of", "SEDC", "!"]
//Result: "Hello there students of SEDC!"

var text="";
let arrayText=["Hello","there","students","of","SEDC","!"];
var x;
for(x in arrayText) {
    text += arrayText[x] + " ";
}
console.log(text);
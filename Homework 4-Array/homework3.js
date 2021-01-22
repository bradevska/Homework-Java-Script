//Write a javascript function that:
//When given any array of strings (should work with array 
//with any number of elements)
//It will create one big string and return it
//Ex:["Hello", "there", "students", "of", "SEDC", "!"]
//Result: "Hello there students of SEDC!"

//ISPRAVKA

//Solution 1
//let arrayText=["Hello","there","students","of","SEDC","!"];

//function fullString(strings) {
//for(let i=0; i < strings.length; i++) {
  //if (strings[i]===strings[strings.length-1]) {
    //  console.log(strings[i]);
  //}
  //else {
    //      console.log(strings[i]+" ");
      //}
//}
//}
//fullString([arrayText]);



//Solution 2
let arrayText=["Hello","there","students","of","SEDC","!"]
var x;
var text=""
for(x in arrayText) {
    text += arrayText[x] + " ";
}
console.log(text);
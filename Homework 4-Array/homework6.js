//Write a javascript function that:
//When given 2 arrays of students firstNames and lastNames 
//will return a new array with students full names
//Every name should have a numeric value before it
//Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
//Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]


//Ovde nesto ja gresam,neznam sto bi mozelo da bide(prazna niza mi pecati)
let array1=["Petar","Viktor"];
let array2=["Velkov","Pesevski"];
let array3=[];

function push(fromArray,toArray){
  let listNumber=1;
  for(let i=0,len=fromArray.lenght; i<len; i++) {
    toArray.push("${listNumber}.${fromArray[i]");
    listNumber++;
  }
  return toArray;
  
}
console.log(array3);
push(array1,array3);
push(array2,array3);

  



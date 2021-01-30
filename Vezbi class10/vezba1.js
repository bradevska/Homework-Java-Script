//Create a javascript function that will find all numbers divisable 
//by 7 and 3 in a array from 1 to 100.Create a javascript function 
//that will find all numbers divisable 



var newArray=[];

function numberDivisable() {

    for(var i=1; i <= 100 ; i++) {
        if ((i % 3=== 0) && (i % 7 === 0))
        newArray.push(i);
      }
      return console.log(newArray);
}

console.log(newArray);

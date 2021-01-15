let userChooses=prompt("Enter D for dog Years or Y for human years");
let userInput=parseInt(prompt("Enter value"));

function dogYears(human){ 
  let rezult=human*7;
  return rezult;
}
dogYears(userInput);

function humanYears(dog){
    let rezult=dog/7;
    return rezult;
}
humanYears(userInput);

if(userChooses==="D") {
    console.log("Human years is" +  " " + humanYears(userInput));
}
else if(userChooses==="Y") {
    console.log("Dog years is" + " " + dogYears(userInput));
}
else {
    console.log("ERROR!!!")
}


   

 











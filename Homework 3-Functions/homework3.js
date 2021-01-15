let inputChooses=prompt("Enter $ or EUR");
let inputMoney=parseInt(prompt("Enter value"));

let kesh=1000;

function myMoney (){
let sum=1000-inputMoney
return sum;
}
myMoney(inputMoney);

if (inputMoney<1000) {
    console.log("The rest of ammount in ATM is"+ " " + myMoney(inputMoney));
}
else if (inputMoney>1000) {
    console.log("Not enough money!!!");
}
else {
    console.log("ERROR")
}

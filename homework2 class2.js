let userInput=prompt("Enter year");
let numberInput=parseInt(userInput);

let a=numberInput;
let b=4;
let c=12;
let rezult=(numberInput-4)%12
console.log(rezult);

if (rezult==0) {
    console.log("Rat");
}
if (rezult==1) {
    console.log("Ox");
}
if  (rezult==2) {
     console.log("Tiger");
}
if  (rezult==3) {
    console.log("Rabbit");
}
if  (rezult==4) {
    console.log("Dragon");
}
if  (rezult==5) {
    console.log("Snake");
}
if  (rezult==6) {
    console.log("Horse");
}
if  (rezult==7) {
    console.log("Goat");
}
if  (rezult==8) {
    console.log("Monkey");
}
if (rezult==9) {
    console.log("Roster");
}

if (rezult==10) {
    console.log("Dog");
}

if (rezult==11){
    console.log("Pig");
}
if ((rezult<0) || (rezult>11)) {
    console.log("eror");
}



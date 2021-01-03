let userInput=prompt("Enter year");
let numberInput=parseInt(userInput);

let a=numberInput;
let b=4;
let c=0.12;
let rezult=(numberInput-4)*0.12
console.log(rezult)

if ((rezult>=-0.48)&& (rezult<=0.50)) {
    console.log("Rat")
}
if ((rezult>=0.51)&& (rezult<=1.50)) {
    console.log("Ox")
}
if ((rezult>=1.51)&& (rezult<=2.50)) {
    console.log("Tiger")
}
if ((rezult>=2.51)&& (rezult<=3.50)) {
    console.log("Rabbit")
}
if ((rezult>=3.51)&& (rezult<=4.50)) {
    console.log("Dragon")
}
if ((rezult>=4.51)&& (rezult<=5.50)) {
    console.log("Snake")
}
if ((rezult>=5.51)&& (rezult<=6.50)) {
    console.log("Horse")
}
if ((rezult>=6.51)&& (rezult<=7.50)) {
    console.log("Goat")
}
if ((rezult>=7.51)&& (rezult<=8.50)) {
    console.log("Monkey")

}if ((rezult>=8.51)&& (rezult<=9.50)) {
    console.log("Roster")
}

if ((rezult>=9.51)&& (rezult<=9.50)) {
    console.log("Dog")
}

if ((rezult>=9.51)&& (rezult<=10.50)) {
    console.log("Pig")
}
if ((rezult<-0.48) || (rezult>10.50))
    console.log("eror")




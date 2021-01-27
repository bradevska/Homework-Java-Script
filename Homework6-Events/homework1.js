//For homework provide examples and explain what is the difference 
//between keypress, keydown, keyup, change (all of this are triggers)!



//The onKeyDown event is triggered when the user presses a key.
//The onKeyUp event is triggered when the user releases a key.
//The onKeyPress event is triggered when the user presses & releases 
//a key (onKeyDown followed by onKeyUp).

//1.Down happens first.
//2.Press happens second (when text is entered).
//3.Up happens last (when text input is complete).

//Razlikata kako sto moze da primetam e vo toa dali se drzi kopceto ili ne...
//keydown i keypress prakticno kako ista funkcija,dodeka keyup kolku i da 
//go drzam kopceto toa pecati edno:)
//Vsusnost kako da nema razlika istata funkcija,neznam kako bi 
//imale razlicna funkcija

document.getElementById("SEDC-G3").addEventListener("keydown", log);
document.getElementById("SEDC-G4").addEventListener("keyup", log);
document.getElementById("SEDC-G5").addEventListener("keypress", log);

function log(event){
  console.log( event.type );
}

// For homework provide examples and explain what is the 
//difference between mouseover, mouseout and mouseleave 
//(all of this are triggers)!
//Prakticno kako mouseleave i mouseout da e isto,a mouseover kako 
//obratna funkcija od drugite dve

var sayHelloButton = document.getElementById("btnHello1");

function setBorderOfButton (event) {
    event.target.style.border = "10px solid green";
}

sayHelloButton.addEventListener("mouseover", setBorderOfButton);
//sayHelloButton.removeEventListener("mouseover", setBorderOfButton);

var sayHelloButton = document.getElementById("btnHello2");

function setBorderOfButton (event) {
    event.target.style.border = "10px solid green";
}

sayHelloButton.addEventListener("mouseout", setBorderOfButton);
//sayHelloButton.removeEventListener("mouseout", setBorderOfButton);

var sayHelloButton = document.getElementById("btnHello3");

function setBorderOfButton (event) {
    event.target.style.border = "10px solid green";
}

sayHelloButton.addEventListener("mouseleave", setBorderOfButton);
//sayHelloButton.removeEventListener("mouseleave", setBorderOfButton);
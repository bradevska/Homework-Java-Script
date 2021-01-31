//CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
//name
//kind
//speak (method)
//this method will take one parameter and will 
//print in the console a message: 
//e.g. dog.speak(“hey bro!!!”) will log in the console 
//“Dog says: ‘Hey bro!!!’”
//Bonus: enter the values from prompt or from HTML inputs


//1st
let animal={
name:"Astra",
kind:"Dog",
speak:function(){
    return (this.kind + " " + this.name +" "+ "says:hey bro!!!" )
}
}
console.log(animal.speak());

//2nd
function Animal(name,kind){
    this.name=name;
    this.kind=kind;
    this.speak=function() {
        return(this.kind + " " + this.name + " " +"says:Hey broo!!!")
    }
}

let animalName=prompt("Animal name");
let animalKind=prompt("Animal kind");
let animalObject=new Animal(animalName,animalKind);
console.log(animalObject.speak());
//Print all numbers from an array and the sum

//Create an array with numbers
//Print all numbers from the array in a list element, in a new HTML page
//Print out the sum of all of the numbers below the list
//Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)



let arr=[2,8,20,50,3];
let div=document.getElementById("numbers");
let ul=document.createElement("ul");

ul.setAttribute("id","theList");
for(i=0; i<arr.length; i++) {
  let li=document.createElement("li");
   li.innerHTML=arr[i];
     ul.appendChild(li);
}
div.appendChild(ul);
 

let a=arr[0];
let b=arr[1];
let c=arr[2];
let d=arr[3];
let e=arr[4];
function sum(a,b,c,d,e){
    let sum=a+b+c+d+e
    document.getElementById("myValue").innerHTML = sum;
}
sum(2,8,20,50,3);




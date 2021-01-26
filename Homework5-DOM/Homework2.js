//Print all numbers from an array and the sum

//Create an array with numbers
//Print all numbers from the array in a list element, in a new HTML page
//Print out the sum of all of the numbers below the list
//Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)



let arr=[2,8,20,50,3,50];
let ul=document.getElementById("list");

for(i=0; i<arr.length; i++) {
  ul.innerHTML += `<li>  ${arr[i]} </li>`;
}

function sum(arr) {
  let result=0;
  for(let i=0; i<arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
  document.getElementById("sum").innerText=result;
}
sum(arr);




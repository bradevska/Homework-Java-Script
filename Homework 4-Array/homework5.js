//Title: Looping structures

//Description: Write a JavaScript function that will return:
//The sum of the MAX and MIN numbers from an array with numbers
//Ex: arr = [3, 5, 6, 8, 11]
//Output: Max: 11, Min: 3, Sum: 14

//Bonus: Try making the function work if there are other types of items in it

let numbers=[10,5,"Biljana",150,75,"Hello Frends",300,25,18];
console.log(numbers);
numbers.sort (function(a,b) {
    return(a-b)
});
console.log(numbers);
console.log("The smallest number is"+ " " +numbers[0] );
console.log("The bigest number is" + " " +numbers[numbers.length-1]);
console.log("The sum of smallest and bigest number is", 
numbers[0]+numbers[numbers.length-1]);


//Title: Looping structures

//Description: Write a JavaScript function that will return:
//The sum of the MAX and MIN numbers from an array with numbers
//Ex: arr = [3, 5, 6, 8, 11]
//Output: Max: 11, Min: 3, Sum: 14

//Bonus: Try making the function work if there are other types of items in it


//ISPRAVKA

//Mi sobira i nesto plus,sigurno ja gresam negde
let numbers=[10,5,150,75,300,25,18];
function sumOfMaxMin(array) {
    let smallestNumber=numbers[0]
    let biggestNumber=null;
    for (let index=0;index<numbers.length;index++){
        if(numbers[index]>biggestNumber) {
            biggestNumber=numbers[index];
        }
        else if(numbers[index]<smallestNumber){
            smallestNumber=numbers[index];
        }
        let sum=biggestNumber+smallestNumber;
        console.log(sum)
    }
}
sumOfMaxMin(numbers);


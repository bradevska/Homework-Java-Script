//Title: Looping structures
//Description: Write a loop in JavaScript that in range 
//from 1 till 20 will write in the console every number, 
//and will add the "\n" new line after every even number 
//otherwise it will add " " empty space.

//ISPRAVKA

let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 for (let i=1; i<21; i++) {
   if(i % 2==0) {
     console.log(i+"/n")
   }
   else {
     console.log(i+" ");
   }
 }
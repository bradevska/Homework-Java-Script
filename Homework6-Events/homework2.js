//CREATE A DYNAMIC TABLE
//Write a Javascript function that will dynamiclly create a table
//User should input the number of Colums and Rows
//In every table cell print which row and column it is (ex. Row-3 Column-1)

let rn = prompt("Input number of rows");
let cn = prompt("Input number of columns");

function createTable(){

 for(var r=0;r<parseInt(rn,10);r++){
   var x=document.getElementById('myTable').insertRow(r);

   for(var c=0;c<parseInt(cn,10);c++) {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}






























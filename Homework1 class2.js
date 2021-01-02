
let userInput = prompt("Enter full date mm/dd/yyyy");

let stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let date = new Date(stringFormatedDate[3],stringFormatedDate[1]-1,stringFormatedDate[2]);

let dateDate = date.getDate();

let dateMonth = date.getMonth + 1;

let dateFullYear = date.getFullYear();

let todayDate = new Date();

let todayDateDate = todayDate.getDate();

let todayDateMonth = todayDate.getMonth() + 1;

let todayDateFullYear = todayDate.getFullYear();

if ( ((dateDate <=02 ) && (dateMonth ) && (dateFullYear =2003)) ||
   ((dateDate >=03) && (dateMonth) && (dateFullYear < 2003)) ){
   console.log("polnoleten")
   }
   else {
       console.log("maloleten")
   }

if ((dateDate=todayDate) && (dateMonth=todayDateMonth)&& dateFullYear>=2003 ){
    console.log("Hapy Birthday")
}

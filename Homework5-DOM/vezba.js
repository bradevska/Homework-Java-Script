//Select the first div
//Select all paragraphs
//Select the last div
//Select the header 3 in the last div
//Select the header 1 in the last div
//Get the text from the first paragraph in the second div
//Add the word "text" to the text element in the second div
//Change the text of the header 1 in the last div
//Change the text of the header 3 in the last div
//Note:You can't change the HTML

//1
let firstDiv = document.querySelector("div");
console.log(firstDiv);
//2
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
//3
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;;
console.log(lastDiv);
//4
let header3last =lastDiv.getElementsByTagName("h3")[0];
console.log(header3);
//5
let header1last = header3last.previousElementSibling;
console.log=header1last;
//6
firstParagraphInSecondDiv=document.getElementsByClassName("secound")[0].innerText;
console.log(firstParagraphInSecondDiv);
//7
document.querySelector("text").innerText += " text!";
//8
header3last.innerText = "Text added from JS";
console.log(header3last.innerText);
//9
header1last.innerText = "Text added from JS also";
console.log(header1last);
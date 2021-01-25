//Change the text of all paragraphs and headers with javascript
//Note:The html must not be changed


let firstParagraph=document.querySelector("p"[0]);
console.log(firstParagraph.innerText);// Checking what the text in first paragraph
firstParagraph.innerText="This is change in first paragraph "
console.log(firstParagraph.innerText);

let secoundParagraph=document.getElementsByClassName("second");
console.log(secoundParagraph);
console.log(secoundParagraph[0].innerText);//Checking what the text in second paragraph
secoundParagraph[0].innerText="This is change in seecond paragraph";
console.log(secoundParagraph[0].innerText);

let firstHeader=document.getElementById("myTitle");
console.log(firstHeader);
console.log(firstHeader.innerText);//Checking what the text  in first paragraph
firstHeader.innerText="THIS IS CHANGE TEXT IN FIRST HEADER"
console.log(firstHeader.innerText);

let lastHeader=document.getElementsByTagName("h1");
console.log(lastHeader[1].innerText);//Checking text in last h1
lastHeader[1].innerText="This is change in last header1 of last DIV"

let lastHeaderh3=document.getElementsByTagName("h3");
console.log(lastHeaderh3[0].innerText);
lastHeaderh3[0].innerText="This is change in last header3 of last DIV"
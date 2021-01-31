//HOMEWORK PART 2
//Write a JavaScript program to display the reading 
//status of some book. The object should have the next 
//properties: title, author, readingStatus and a method 
//that will return info depending on the readingStatus e.g.
//Already read 'The Robots of dawn' by Isaac Asimov. (if true)
//You still need to read 'Mockingjay: 
//The Final Book of The Hunger Games' by Suzanne Collins. 
//(if false).
//BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

function Book(title,author,readingStatus){
    this.title=title;
    this.author=author;
    this.readingStatus=readingStatus;
    this.readingStatus=function(){

        if(readingStatus=true){
        return("Already read" + " " + this.title + " "+"by"+ this.author)
    }
        else {
            return("You still need to read" + " "+ this.title + " " + "by" + this.author);
        }
    }
}

let title=prompt("Title of book");
let author=prompt("Author of book");
let readingStatus=prompt("Yes for reading or No for not yet");
if(readingStatus==="Yes") {
    readingStatus=true;
}
else {
    readingStatus=false;
}
 let bookObject=new Book(title,author,readingStatus);
     console.log(bookObject.readingStatus());
 

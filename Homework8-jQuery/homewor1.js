//Create an input
//Create a button
//When clicked the button should print a greet message in an h1 header
//Ex: input: Petko output message: Hello there Petko!

//You must use JQuery to complete the task
 
$("#button").click(function(){
    let print=$("#input").val();

    $("div").append(`Hello there ${print}`);
})
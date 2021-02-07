//1. Return and print every property with their values from 23 post

document.getElementById("buttonUsers").addEventListener("click",function(){
    let userInput=Number($("userInputNumber").val());
    if(userInput > 99 && userInput < 1) {
        alert("Please enter a number betwen 1 to 100")
    }
    else {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result=>result.json())
            .then(info=>{
                if (info !== undefined && info.lenght>0) {
                    document.getElementById("resultOfDiv").innerHTML=(
                        `
                        <ul>
                           ${info.map(info=>{
                              if(userInput===info.id) {
                                 return(
                                       `
                                       <li>
                                            Id:${info.id} </br>
                                           Title: ${info.title}</br>
                                          Body:${info.body}</br>
                                      </li>

                                       `
                                     )
                                 }
                            }).join("")}

                         </ul>
                         `
                    )

                }

            })
            .catch(error=> {
                console.error(error);
            })
    }
},false)

// 2. Show all albums that have "omnis" in their title

document.getElementById("showBttn").addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(json=> {
        if(json!==undefined && json.lenght > 0) {
            document.getElementById("div").innerHTML=(
                `
                <ul>
                  ${json.map(json=> {
                      if(json.title.match("omnis")) {
                          return (
                              `
                              <li>
                                    Id:${json.id}
                                    Title:${json.title}
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
})
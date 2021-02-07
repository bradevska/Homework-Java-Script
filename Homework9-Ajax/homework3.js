//  3.Create new user

document.getElementById("createUser").addEventListener('click', function() {
    var userFirstName = document.getElementById("userFirstName").value;
    var userLastName = document.getElementById("userLastName").value;
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPhone = document.getElementById("userPhone").value;
    
    function createNewUser(userFirstName,userLastName,userName,userEmail,userPhone) {
        if (userFirstName !==""  &&  userLastName !== ""  && userName !== "" && userEmail !=="" && userPhone !=="") {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    "First Name": userFirstName,
                    "Last Name" : userLastName,
                    "User name": userName,
                    "User Email": userEmail,
                    "User phone": userPhone
                }),
                headers: {
                    "Content-type": "registration/json; charset=UTF-8",
                }
            })
            .then(response => response.json())
            .then(registrationUser => console.log("Successfuly created user", registrationUser))
            .catch(err => console.error(err));
        }
    }

    createNewUser(userFirstName,userLastName,userName,userEmail,userPhone)
})





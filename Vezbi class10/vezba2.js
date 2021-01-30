//2. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)



// Select what the user wishes to do
var accountType = parseInt(prompt("Which type of account do you have? \n 1. deposit \n 2. withdraw \n 3. balance"));
function selectType() {
    var accountType = parseInt(prompt("Which type of account do you have? \n 1. deposit \n 2. withdraw \n 3. balance"));
	if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
		selectFunction();
	} else {
		alert("Please make a valid selection");
		selectAccountType();
	}
}
var deposit= parseInt(prompt("How much do you want to deposit?"));



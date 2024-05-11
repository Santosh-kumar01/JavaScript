const account_Id = 1234
let account_Email = "santosh_kumar68979@gmail.com"
var account_Password = "909089"
account_City = "Kolkata"
let account_state;


// account_Id = 2 // not allowed

account_Email = "bank@gmail.com"
account_Password = "69849"
account_City = "Jharkhand"


 /*prefer not to use var
  because of issue in block scope and function scope*/

console.log(account_Id)
console.table([account_Email,account_Id,account_Password,account_City,account_state])
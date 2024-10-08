const accountId = 1234 //can't change
var accountEmail = "xyz@gamil.com" //can be cahnge
let accountPassword = "98765409"
let accountState; //undefined
accountCity = "Delhi"
    // accountId = 234 //not allowed 

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
 */
accountPassword = "567899"
accountEmail = "abcd@gamil.com"
accountPassword = "5678989"
console.table([accountId, accountEmail, accountPassword, accountCity]) // for print all variables in tabular form
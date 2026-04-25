
// /* 
// In other pgm language redeclarion is not possible
// int x 
// int x */

//REDECLARATION using "var" keyword is ALLOWED

//Declaration :

var x // Memory Created and labelled the memory space as x

// Redeclaration 

var x  // Memory Created again and relabelled(redeclared) the memory space as x

console.log(x) // undefined


//REASSIGNMENT using "var" keyword is ALLOWED

//Assignment

var x =123 // Memory Created, labelled and assigned with a value

// Reassignment

x="456"  // Using existing memory reassigning the value


console.log(x) // 456 // reassignment is allowed using var

/******************************************************************************************/

 //Redeclaration using "let" keyword is NOT ALLOWED

let y// Memory Created and labelled the memory space as y 

let y  // Memory Created again and relabelled(redeclared) the memory space as y

console.log(y); // Throws Reference error


 //Reassignment using "let" keyword is allowed

let accBalance=10000// Memory Created, labelled and assigned the memory space as salary

// Reassignment is allowed 

accBalance=20000  // Using existing memory reassigning the value (like the accBalance of bank account )

console.log(accBalance); // 20000

/******************************************************************************************/

 //Redeclaration using "const" keyword is NOT ALLOWED

const z// Memory Created and labelled the memory space as z

const z  // Memory Created again and relabelled(redeclared) the memory space as z

console.log(z); // Throws Reference error


 //Reassignment using "const" keyword is NOT ALLOWED

const accNumber=95765675// Memory Created and labelled the memory space as 

// Reassignment is allowed 

accNumber=8787768969 // Using existing memory reassigning the value is NOT ALLOWED (like the account number of bank account )

console.log(accNumber); // 20000


// console.log(accountNumber); // Reference error because we cannot assigne a new value to a varible (like final value, like your aadhar number)
// //Note: we cannot leave the varibale declared with const without inialization for sure we have initialize const variable


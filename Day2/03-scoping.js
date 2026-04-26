
//Scoping in var,let and const
//function scoped :
//var is function scoped

//var message = "Hello Team I am global variabe" // global declaration

// function greet(){

// var message = "Hello Team I am inside the function scope"
// console.log("Accessing the var variable inside the function scope - ",message); // 

// }

// greet()
// console.log("Accessing the var variable outside the function scope - ",message); // Here message is out of scope 

// //let is also function scoped

// function greet(){

// let message = "Hello Team I am inside the function scope"
// console.log("Accessing the let variable inside the function scope - ",message); // 

// }

// greet()
// console.log("Accessing the let variable outside the function scope - ",message); // Here message is out of scope 


//const is also function scoped

// function greet(){

// const message = "Hello Team I am inside the function scope"
// console.log("Accessing the const variable inside the function scope - ",message); // 

// }

// greet()
// console.log("Accessing the const variable outside the function scope - ",message); // Here message is out of scope 

//Conclusion : var,let and const are function scoped


//Block scope

//var keyword is used during time when JS was used as scripting language

// if (true) {
//     var blockMessage = "Hello I am inside the if block"
//   //  console.log("Accessing var inside the if block",blockMessage); //Inside the if block
// }

// console.log("Accessing var outside the if block",blockMessage); // Outside the if block

//let and const was instroduced during the standardization ES6 2015 // COnverted pgm language
if (true) {
    let blockMessage = "Hello I am inside the if block"
  //  console.log("Accessing let inside the if block",blockMessage); //Inside the if block
}

console.log("Accessing let outside the if block",blockMessage); // Outside the if block



//Conclusion : var is not block scoped it is only function scoped
//let and const is both function scoped as well as block scoped
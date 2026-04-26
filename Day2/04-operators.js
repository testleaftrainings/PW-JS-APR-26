

//Operators

//+,-,/,% => modulus opearator

// let x = 6%2 //(Reminder of the division)
// console.log("Modulous of 6",x);


//Post Increment => value++ => post increment

// let x = 10
// console.log(x++); // x= 10, x= 10+1

// /* Control first gets the value of x assigned as 10 for post increment after it is assigned only then the increment */
// console.log(x); //11


//Pre Increment

// let y = 10
// console.log(++y); // y= 11, y= 11

// /* Control first gets the value of x assigned as 10 for post increment after it is assigned only then the increment */
// console.log(y); //11

//Post decrement

// let z = 10
// console.log(z--); // z= 10, z= 10-1 = 9

// /* Control first gets the value of x assigned as 10 for post increment after it is assigned only then the increment */
// console.log(z); //9


//Pre Decrement

// let i = 10
// console.log(--i); // i= i-1 = 9, i=9

// /* Control first gets the value of x assigned as 10 for post increment after it is assigned only then the increment */
// console.log(i); //9


//Strict Equality "==="

/* 1, Compare datatypes and
2. Compare the value */


//Non strict equality (Loose Equality) "=="

/*1. Compare the values and not the datatypes */

console.log(1===1); //true here the datatype and value are same hence true
console.log(1==="1"); //false here the datatype are different and value are same hence false
console.log(1=="1"); //true here the datatype are different and value are same 

/* The output is true because of the mechanism in JS called as type coercion
What is type coercion it is a mechanism in JS to convert a string datatype to number datype */

console.log("1"==true);//false
console.log(true==1);//true// here the boolean true internally gets converted to the number datatype and that is due to the type coercion mechanism in JS








// //Type1 :Named Function

// function add(a, b) { // In need to assign the result is 300 to the named function add(a,b)=300

//      let c = a + b // c=300
//     console.log(`The addition of a,b is ${c}`);
//     return c // c=300 = add(a,b) = add(100,200)

// }


// console.log(add(100, 200)) // passing the values of a and b at the time of calling the named function




// //Type 2 : function expression// anonyoumous


// let y= function(a,b) { // In need to assign the result is 300 to the named function add(a,b)=300

//      let c = a + b // c=300
//     console.log(`The addition of a,b is ${c}`);
//     return c // c=300 = add(a,b) = add(100,200)
// }

// console.log(`This is an arrow function ${y(100, 200)}`)


// //Type3 :arrow function


// let z= (a,b)=> { // fat arrow

//      let c = a + b // c=300
//     console.log(`The addition of a,b is ${c}`);
//     return c // c=300 = add(a,b) = add(100,200)
// }

// console.log(`This is an arrow function ${z(100, 200)}`)


//Type4 : simple arrow function


const arrowFun = (a,b)=> a+b
console.log(arrowFun(10,20));









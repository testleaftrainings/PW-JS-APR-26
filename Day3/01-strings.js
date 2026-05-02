

//String Declaration =>  '',"",``{In keyboard above tab buton}


//String Literal

let companyName = 'Testleaf' // 1001 Address
let firmName = "Testleaf" // 1001 Address

//Object Literal

let companyName1 = new String("Testleaf")     //1002 // new memory / address for storing the string value
let firmName1 = new String("Testleaf")        // 1003 // new memory / address for storing the string value


console.log(companyName===firmName); //true
console.log(companyName1===firmName1); //false

//==== operator will check for
/* 1. Value
2. Datatype
3. Ref of the memory location */

//String Manipulation :


//1. Escape Sequence

// \, \n, \t

let testEsc = 'It\'s a\t smoke\n testing'
console.log(testEsc);

let testEscDbl = "Hello I am a \"double quote\""
console.log(testEscDbl);


//2. Concatenation => "+"[Concatenation Operator] and concat() 

let testCase = "Create a lead"
let testCaseNo = 123

let resultplus = testCase+" TestCaseNo "+testCaseNo // 
console.log(resultplus); //Create a lead TestCaseNo 123

let resultConcat = testCase.concat(testCaseNo)
console.log(resultConcat);



//3. Template Literal => `${}`
function tempFun(x,y){

    // let x=123

// console.log("There is "+x+" test cases"+y); // OPtion1 older method

console.log(`There is ${x} test cases ${y}`); // Option2 new modern JS

}

tempFun(1234,"Pass")


//4. Length Property

// let course = "Playwaright"

// console.log(`The length of the string is ${course.length}`) // 10 letters

// //5. charAt()

// console.log(`The charAt() of 2 is ${course.charAt(2)}`) // a


// //6. indexOf()

// console.log(`The indexOf of a is ${course.indexOf("a")}`) // 2

// console.log(`The indexOf of a is ${course.indexOf("a",3)}`) // 5


//7. subString

let course = "Playwright"

let outputSub1 = course.substring(4,10)
console.log(outputSub1) // wright

let outputSub2 = course.substring(10,4) // swapping
console.log(outputSub2) // wright

let outputSub3 = course.substring(10,-5) // negative index -5==0
console.log(outputSub3) //

/* Notes :

1, start index is included and end index is not included.
2. start and end index are swappable
3. substring does not allow negative index */

//8. Slice // Modern JS 


// let filename = "Ravi.png"

// let extension = filename.slice(-3)
// //let extension = filename.slice(9,13)

// console.log(extension); // png

let outputSlice1 = course.slice(4,10)
console.log(outputSlice1); // wright

let outputSlice2 = course.slice(10,4)
console.log(outputSlice2); // " "  white space


/* Notes:

1, start index is included and end index is not included.
2, start index and end index are not swappable
3, slice will allow negative index
*/










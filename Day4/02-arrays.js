

//Arrays in JavaScript

/* 1. Dynamic in size
Arrays grow and shrink in size as element are added 

2. Heterogenous in nature
Arrays in JS can store different datatypes like number, string, boolean*/

let letters = ["a","b","c","d","e"]


//1. push()->add element to the end of the array

letters.push("f","g","h")
console.log(letters);

/* O/P:
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
] */

//2. pop()=> remove only one element from the end of the array

letters.pop()
console.log(letters);

/* O/P:
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */

//3. unshift() : add one or more element to the begining of the array

letters.unshift("x","y","z")
console.log(letters);

/* [
  'x', 'y', 'z', 'a',
  'b', 'c', 'd', 'e',
  'f', 'g'
] */

//4. shift() : remove only one element from the first part of the array

letters.shift()
console.log(letters);

/* [
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f', 'g'
] */




//5. slice() => extract the part of the array whithout modifying the original array

let arrayVal = ["a","b","c","d","e"] // => [0,1,2,3,4]

let resultSlice = arrayVal.slice(1,4)
console.log(resultSlice); // [ 'b', 'c','d' ]


//6. splice() => add or remove the elments from the array


arrayVal.splice(1,3,"x","y","z")
console.log(arrayVal); // [ 'a', 'x', 'y', 'z', 'e' ]

arrayVal.splice(3,4,"x","y","z","w")
console.log(arrayVal); 

/*O/P:

[
  'a', 'x', 'y',
  'x', 'y', 'z',
  'w'
]*/




//7. sort()

let numberArray = [10, 8, 9, 7]

numberArray.sort() // [ 10, 7, 8, 9 ] in number array we will not be able to use the sort method

numberArray.sort((c,d)=>c-d) 
console.log(numberArray);// ascending => [ 7, 8, 9, 10 ]



numberArray.sort((a,b)=>b-a) // Inorder to get the sorted array we have use arrow function
console.log(numberArray); // descending => [ 10, 9, 8, 7 ]

//map

//num = 10, 9, 8,7

const squaredArray = numberArray.map((num)=>num*num)
console.log(squaredArray);//[ 100, 81, 64, 49 ]


//filter

const filteredEvenArray = numberArray.filter((num)=>num%2===0)
console.log(filteredEvenArray);






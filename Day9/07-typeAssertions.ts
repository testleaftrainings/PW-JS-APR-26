

let reponse : any = "Success" // Success from outside of the code from server



let myResponse = <string> reponse // Convey typescript compiler tha the data coming from outside source is a string datatype and I dont want comilation error

console.log(myResponse.length);

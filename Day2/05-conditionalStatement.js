
//Note : when we use strict equality it is case sensitive

function getBrowsers(browserName){ // "browserName" is a parameter/local variable to capture the value of browserName 

//let browserName = "Chrome" // hard coding

if (browserName === "chrome") { // Note : when you use "=" assignment opearator it is not case sensitive

    console.log("Launch chrome");

} else if (browserName === "firefox") {

    console.log("Launch Firefox");

} else if (browserName === "msedge") {

    console.log("Launch MSEDGE")

} else {
    console.log("Not a supported browser");

}

}


getBrowsers("msedge") // When you call a function by its name use pass the value as an argument

//Note while passing the value as an argument you dont need to declare using a variabe(let,cons)
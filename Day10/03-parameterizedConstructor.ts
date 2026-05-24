

class LoginPage3 {
    //GLobal property/variable
    // browserName = "Chrome"
    // url = "https://leaftaps.com/opentaps/control/main"

    browserName:string // globall declaration
    url : string

    launch() {
        console.log(this.browserName); //fetch //consuming the data
    }

    loadurl() {
        console.log(this.url);

    }

    constructor() { // this is the first block that gets executed
        this.browserName = "Chrome" // Local variable  // here the global property is assigned a value
        this.url = "https://leaftaps.com/opentaps/control/main" 
    }
}

/* 
declaring globally => to get the access of property across all the method inside the class
assiging locally inside constructor */

/* Step1 : 
Assiging the value to the properties before execution */

const lop3 = new LoginPage3()

lop3.launch()
lop3.loadurl()
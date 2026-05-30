
import { EmployeeSignUp } from "../Day11/01-accessModifiers.js";

class HR extends EmployeeSignUp { // child class

    
    childName: string

    constructor() {
        super()
        this.eName = "Ravi"
        this.childName = this.eName
    }


    empUpdate() {
        console.log(this.ephno) // protected ephno got accessed by the child class
        // this.ephno=89898989
        console.log(this.ephno);

    }

    printDetails() { // method over riding
        //   console.log(`The emp details ${this.eName} : ${this.eid} : ${this.ephno} : ${this.eSalary}`); // when we dont use static keyword for "eid"
        console.log(`This is child class method emp details ${this.childName} : ${EmployeeSignUp.eid} : ${this.ephno}`);
        super.printDetails() // call parent method
        //    console.log(this.parentName);

    }

}

const objhr = new HR()
objhr.empUpdate() // child class method
objhr.printDetails() // parent class method
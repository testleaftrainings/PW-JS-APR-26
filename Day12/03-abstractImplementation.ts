import { Restaurant } from "./02-abstract.js";


class Geetham extends Restaurant{
    
    prepareFood() {
       console.log("South Indian Meals");
       
    }
}



class KFC extends Restaurant{
    prepareFood(): void {
        console.log("Preparing Fried Chicken");
    }
}

class PizzaHut extends Restaurant{
    prepareFood(): void {
    console.log("Preparing pizza");
    }


}

const geethamObj = new Geetham();
geethamObj.acceptOrder()
geethamObj.payment()
geethamObj.prepareFood()


const kfcObj = new KFC();
kfcObj.prepareFood()


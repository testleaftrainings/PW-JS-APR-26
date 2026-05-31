import { SwiggyRules, ZomatoRules } from "./01-interface";


class Geetham implements SwiggyRules,ZomatoRules{
    
    // Concrete Class

    acceptOrder(): void {
        console.log("Order Accepted");        
    }

    prepareFood(): void {
        console.log("Preparing Food");
        
    }

    menu():void{
        console.log("Meals");        
    }
    
    trackOrder(): void {
        console.log("Tracking Information");
        
    }
    cancelOrder(): void {
       console.log("Cancel order to be acpted");
       
    }
    

}

const obj = new Geetham()
obj.menu()
obj.acceptOrder()
obj.prepareFood()
obj.trackOrder()

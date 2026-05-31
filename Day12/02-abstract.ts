

export abstract class Restaurant{

    // All the common action accross all the restuarant is implemented in a common abstarct class for reusability

    acceptOrder(){
        console.log("Order Accepted");       

    }

    payment(){

        console.log("Payment Received");
        

    }

    //Methods/Actions that are not commnon accross class/ restaurant 
    abstract prepareFood():void


}
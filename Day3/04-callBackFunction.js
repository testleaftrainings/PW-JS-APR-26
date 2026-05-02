

//View a video in the youtube

//1. Related videos // suggesstion
// 2. Saved videos


function playVideo(x,y){

    console.log("Play the youtube video");
    
    x()

    y()


}


function saveHistory(){
console.log("Video saved as history");

}

function showRelatedVideos(){
console.log("Show related videos");
}




playVideo(saveHistory,showRelatedVideos) // playVideo is main function 


/* Note :

Here the main function is connected to your subFunction using callBack function by passing those subFunctions as arguments of the main function*/
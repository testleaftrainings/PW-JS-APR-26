

import { test } from "@playwright/test";

test("Learn to handle elements within iframes",async ({page}) => {

    await page.goto("https://developer.servicenow.com/dev.do");

    const allframes = page.frames() //TO get all the frames present in a web application

    //[MainPage,frame1,frame2...]
 
    console.log(allframes.length) // to get the count of the array of frames we are using length property

    for (let index = 0; index < allframes.length; index++) {
       
        const title = await allframes[index].title()
         console.log(`The title of the frames are ${title}`)
    }
  //  console.log(await allframes[0].title()) //=>  Title of the page to be printed

    await page.waitForTimeout(3000) // for demo

    
    
})

// import { test } from "@playwright/test";

// import credentials from "../../Data/login.json"

// test.describe("Test to ne executed in serial mode",async () => {
    
// for (let data of credentials) {

//     test(`Learn to read JSON file ${data.TestCaseId}`, async ({ page }) => {

//         await page.goto("https://leaftaps.com/opentaps/control/main");

//         //  await page.locator("#username").fill("democsr2"); // hard coding

//         await page.locator("#username").fill(data.Username) // dynamic json data

//         await page.locator("#password").fill(data.Password);

//         await page.waitForTimeout(3000) // demo

//         await page.locator(".decorativeSubmit").click();



//     })

// }

// })
// // /* JSON => JavaScript Object Notation

// // JSON structure => key : value
// // [
// // {

// // "Username" : "democsr2",

// // "Password" : "crmsfa"

// // },
// // {
// // "Username" : "democsr",

// // "Password" : "crmsfa"
// // }
// // ]

// // [frame1, frame2]
// // */

// /* 
// Internally 2 tests are generated when we have a for loop:


//  test("Learn to read JSON file", async ({ page }) => {

//         await page.goto("https://leaftaps.com/opentaps/control/main");

//         //  await page.locator("#username").fill("democsr2"); // hard coding

//         await page.locator("#username").fill(data.Username) // dynamic json data

//         await page.locator("#password").fill(data.Password);

//         await page.waitForTimeout(3000) // demo

//         await page.locator(".decorativeSubmit").click();



//     })



//  test("Learn to read JSON file", async ({ page }) => {

//         await page.goto("https://leaftaps.com/opentaps/control/main");

//         //  await page.locator("#username").fill("democsr2"); // hard coding

//         await page.locator("#username").fill(data.Username) // dynamic json data

//         await page.locator("#password").fill(data.Password);

//         await page.waitForTimeout(3000) // demo

//         await page.locator(".decorativeSubmit").click();



//     })
//     */


import { test } from "@playwright/test";

import credentials from "../../Data/login.json";

test.describe("Test to be executed in serial mode", () => {

    test("Learn to read JSON file using for...of loop", async ({ page }) => {

        for (const data of credentials) {

            await page.goto("https://leaftaps.com/opentaps/control/main");

            // Dynamic JSON data
            await page.locator("#username").fill(data.Username);

            await page.locator("#password").fill(data.Password);

            await page.waitForTimeout(3000);

         //   await page.locator(".decorativeSubmit").click();

            console.log(`Executed for TestCaseId: ${data.TestCaseId}`);


        }

    });

});
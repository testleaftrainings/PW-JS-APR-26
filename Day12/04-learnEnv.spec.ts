

/// <reference types="node" />

import { test } from "@playwright/test";
import dotenv from "dotenv"

let filename = process.env.envFilename // To get the data from the terminal we have use process keyword

dotenv.config({path:`Data/${filename}.env`})


    test(`Learn to read ENV file `, async ({ page }) => {

        await page.goto(process.env.BaseUrl as string); // qa environment

        await page.locator("#username").fill(process.env.LF_Username as string) // 

        await page.locator("#password").fill(process.env.LF_Password as string);

        await page.waitForTimeout(3000) // demo

        await page.locator(".decorativeSubmit").click();



    })






console.log(process.env.Username); // System environment username



//process helps to reveal the username of the local system environment

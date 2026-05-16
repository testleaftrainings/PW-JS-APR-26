
import { test } from "@playwright/test";

test("Learn to interact with webelements present inside frames", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //interact with a webelement in the DOM using frameLocator()

    const frame2Ref = page.frameLocator('[src="nested.xhtml"]') // out of 4 frames I am choosing one of them(frame 2) using CSS selectors

    const buttonText = await frame2Ref.locator("#Click").innerText();

    console.log(buttonText);

    await page.waitForTimeout(3000)



})



test.only("Learn to interact with  webelements present inside nested frames", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //interact with the outerframe in the DOM using frameLocator()

    const frame_outerframe = page.frameLocator('[src="page.xhtml"]')  // Step1 identify the outerframe and get the reference of outerframe

    const frame_innerframe = frame_outerframe.frameLocator('[id="frame2"]')

    await frame_innerframe.locator("#Click").click();

    console.log(await frame_innerframe.locator("#Click").innerText());

    await page.waitForTimeout(3000)



})
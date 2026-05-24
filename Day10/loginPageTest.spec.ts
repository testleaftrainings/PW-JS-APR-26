

import { test } from "@playwright/test";

import {LoginPage} from "./04-login"

test("Learn POM Login",async ({page,context}) => {
    
const loginobj = new LoginPage(page)
await loginobj.loadurl("https://leaftaps.com/opentaps/control/main")
await loginobj.fillCredentials("democsr2", "crmsfa")
await loginobj.clickLogin()

await page.waitForTimeout(3000) // demo
})
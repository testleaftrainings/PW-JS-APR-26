import { test, expect } from "@playwright/test";

test.use({storageState:"Data/login.json"}) // test annotation 

test("Learn Storage state", async ({ page,context }) => {

    await page.goto("https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home");

    // await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com")

    // await page.getByLabel("Password", { exact: true }).fill("Ravisalesplay#1234")

    // await page.getByRole("button", { name: "Log In" }).click(); // Login Page

    await page.getByTitle("App Launcher", { exact: true }).click(); // Home Page

   await page.waitForTimeout(3000)


})


import { test } from "@playwright/test";
import dotenv from "dotenv"

import {LoginPage} from "../pages/01-login"
import {WelcomePage} from "../pages/02-welcomePage"
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";

dotenv.config({path:"Data/qa.env"})

test("Learn POM Login",async ({page}) => {

//login page
const loginobj = new LoginPage(page)
await loginobj.loadurl(process.env.BaseUrl as string)
await loginobj.fillCredentials(process.env.LF_Username as string, process.env.LF_Password as string)
await loginobj.clickLogin()

//welcome page
const wp = new WelcomePage(page)
await wp.clickCRM()

//home page
const hp = new HomePage(page)
await hp.clickLeads()

//lead page
const lp = new LeadPage(page)
await lp.clickCreateLead()

//create lead page
const clp = new CreateLeadPage(page)
await clp.enterMandatoryField()
await clp.clickSubmit()

//view lead page
const vp = new ViewLeadPage(page)
await vp.verifyFirstName()

await page.waitForTimeout(3000) // demo

})
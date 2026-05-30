

import { test } from "@playwright/test";

import {LoginPage} from "../pages/01-login"
import {WelcomePage} from "../pages/02-welcomePage"
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";

test("Learn POM Login",async ({page}) => {

//login page
const loginobj = new LoginPage(page)
await loginobj.loadurl("https://leaftaps.com/opentaps/control/main")
await loginobj.fillCredentials("democsr2", "crmsfa")
await loginobj.clickLogin()

//welcome page
const wp = new WelcomePage(page)
await wp.clickCRM()

//home page
const hp = new HomePage(page)
await hp.clickLeads()

})
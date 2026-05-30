import { LoginPage } from "./01-login";


//We are inheriting the "page" property from LoginPage to use all the methods related to page fixture

export class WelcomePage extends LoginPage{

async clickCRM(){
await this.page.locator('//a[contains(text(),"CRM")]').click()
}

}
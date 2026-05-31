import { Page } from "@playwright/test";
import { PWWrapper } from "../utility/playwrightWrapper";



export class LoginPage extends PWWrapper {


    validateElement(): void {
        throw new Error("Method not implemented.");
    }

    // page: Page // page variable should hold what?

    // /* 1. page refrence across all methods => GLobal
    // 2. page ref has to initialized first => constructor */

    // constructor(LocalPage: Page) {  // Prioritization of method an assiging the valur to page fixture value
    //     this.page = LocalPage
    // }

    async loadurl(url: string) {

        await this.page.goto(url) // page fixture reference

        console.log(url);

        console.log(await this.getTitle())

        return this
    }

    async fillCredentials(username: string, password: string) {

        // await this.page.locator('//input[@id="username"]').fill(username);
        // await this.page.locator('//input[@id="password"]').fill(password);

        await this.clearAndFill(this.selectors.usernameField, "democsr2")
        await this.clearAndFill(this.selectors.passwordField, "crmsfa")


       console.log(`Fill username and password ${username} and ${password}`);

        return this
    }

    async clickLogin() {

        await this.page.locator('//input[@class="decorativeSubmit"]').click();

        console.log("Click the login button");

        return this

    }

    // page fixture is the first value that has to asigned before all other method gets invoked

    selectors = {
        usernameField : '//input[@id="username"]',
        passwordField : '//input[@id="password"]'

    }
}



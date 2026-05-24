import { Page } from "@playwright/test";



export class LoginPage {

    page: Page // page variable should hold what?

    /* 1. page refrence across all methods => GLobal
    2. page ref has to initialized first => constructor */

    constructor(LocalPage: Page) {  // Prioritization of method an assiging the valur to page fixture value
        this.page = LocalPage
    }

    async loadurl(url: string) {

        await this.page.goto(url) // page fixture reference

        console.log(url);
    }

    async fillCredentials(username: string, password: string) {

        await this.page.locator('//input[@id="username"]').fill(username);
        await this.page.locator('//input[@id="password"]').fill(password);

        console.log(`Fill username and password ${username} and ${password}`);
    }

    async clickLogin() {

        await this.page.locator('//input[@class="decorativeSubmit"]').click();

        console.log("Click the login button");

    }

    // page fixture is the first value that has to asigned before all other method gets invoked
}



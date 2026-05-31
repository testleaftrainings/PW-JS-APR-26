import { Page } from "@playwright/test"


export abstract class PWWrapper {

    page: Page // page variable should hold what?

    /* 1. page refrence across all methods => GLobal
    2. page ref has to initialized first => constructor */

    constructor(LocalPage: Page) {  // Prioritization of method an assiging the valur to page fixture value
        this.page = LocalPage
    }

    async getTitle(): Promise<string> {

        const title = await this.page.title()
        return title
    }

    abstract validateElement(): void // rule by architect to implement validation of an element as the control navigates from one page to another

    async clearAndFill(locator: string, data: string) {
        await this.page.locator(locator).clear()
        await this.page.locator(locator).fill(data)
// 
    }


}
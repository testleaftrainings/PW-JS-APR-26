import { PWWrapper } from "../utility/playwrightWrapper";
import { WelcomePage } from "./02-welcomePage";


export class HomePage extends PWWrapper{
    validateElement(): void {
        throw new Error("Method not implemented.");
    }

    async clickLeads(){
        await this.page.locator('//a[text()="Leads"]').click()
         console.log(await this.getTitle())
    
    }




}
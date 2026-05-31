import { PWWrapper } from "../utility/playwrightWrapper"
import { HomePage } from "./03-homePage"


export class LeadPage extends PWWrapper{
   validateElement(): void {
      throw new Error("Method not implemented.")
   }

   async clickCreateLead(){

    await this.page.locator('//a[text()="Create Lead"]').click()
     console.log(await this.getTitle())
   } 
}
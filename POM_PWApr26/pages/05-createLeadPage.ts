import { PWWrapper } from "../utility/playwrightWrapper";
import { LeadPage } from "./04-leadPage";
import {faker} from "@faker-js/faker"

export class CreateLeadPage extends PWWrapper{
validateElement(): void {
    throw new Error("Method not implemented.");
}

async enterMandatoryField(){

    // await this.page.locator('#createLeadForm_companyName').fill(faker.company.buzzNoun());

    await this.clearAndFill("#createLeadForm_companyName",faker.company.buzzNoun())
    await this.page.locator('#createLeadForm_firstName').fill("Ravindran")
    await this.page.locator('#createLeadForm_lastName').fill(faker.person.lastName())
    
    
    console.log(await this.getTitle())

}

async clickSubmit(){
    await this.page.locator('.smallSubmit').click()
}
}
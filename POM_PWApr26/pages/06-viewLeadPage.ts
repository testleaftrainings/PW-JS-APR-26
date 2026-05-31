import { expect } from "@playwright/test";
import { CreateLeadPage } from "./05-createLeadPage";
import { PWWrapper } from "../utility/playwrightWrapper";


export class ViewLeadPage extends PWWrapper{
    validateElement(): void {
        throw new Error("Method not implemented.");
    }

    async verifyFirstName() {
        const fName = await this.page.locator('#viewLead_firstName_sp').innerText()
        expect(fName).toBe("Ravindran")
        console.log(fName);

         console.log(await this.getTitle())
        
    }
}
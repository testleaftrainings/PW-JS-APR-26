import { expect } from "@playwright/test";
import { CreateLeadPage } from "./05-createLeadPage";


export class ViewLeadPage extends CreateLeadPage{

    async verifyFirstName() {
        const fName = await this.page.locator('#viewLead_firstName_sp').innerText()
        expect(fName).toBe("Ravindran")
        console.log(fName);
        
    }
}
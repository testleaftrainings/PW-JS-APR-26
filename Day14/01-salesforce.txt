/* 
5 points to do API testing in POSTMAN :
1. endpoint
2. CRUD=>POST,GET,... 
3. Authorization : Bearer Token
4. Headers : Content-Type:application/json
5. Body : raw, JSON
*/

/* 
UI Testing : 1. page fixture: Create an isolated context --> page
API Testing : 1. request fixture: Create an isolated context --> request

page.goto()
request.post()
*/


import { expect, test } from "@playwright/test"

let url: any // global scope
let token: any // global scope
let id: any // global scope

test.describe.serial("Create Lead in salesforce", async () => {


    test("Generate token", async ({ request }) => {

        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                    "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                    "username": "ravindran.ramdas@testleaf.com",
                    "password": "Ravisalesplay#1234",
                    "grant_type": "password"
                } //Alt+shift+f
            }
        )

        const reponseBody = await response.json() //deserialization // only the response body and not the status
        console.log(reponseBody);

        url = reponseBody.instance_url
        console.log(url);

        token = reponseBody.access_token
        console.log(token);

        console.log(response.status()) // 200 
        console.log(response.statusText()) //OK

        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")
    })


    test("Create Lead", async ({ request }) => {

        const response = await request.post(`${url}/services/data/v65.0/sobjects/Lead/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "Salutation": "Mr.",
                    "FirstName": "Ravindran",
                    "LastName": "R-Apr26",
                    "Company": "Testleaf",
                    "Phone": "89898980"
                }

            }
        )


        /* response => json, status, cookies,headers,.... */

        const reponseBody = await response.json() // deserialization
        console.log(reponseBody);

        console.log(response.status()) // 201 
        console.log(response.statusText()) //CREATED

        expect(response.status()).toBe(201)
        expect(response.statusText()).toBe("Created")

        id = reponseBody.id


    })
    test("Fetch the lead created", async ({ request }) => {

        const response = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        )

        const responseBody = await response.json()
        console.log(responseBody);

         console.log(response.status()) // 200 
        console.log(response.statusText()) //ok

        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")


    })

})
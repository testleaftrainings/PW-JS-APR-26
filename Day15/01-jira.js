//Step1 : Install axios : npm install axios 
/*
5 points to do API testing in POSTMAN :
1. endpoint
2. CRUD=>POST,GET,...
3. Authorization : Bearer Token
4. Headers : Content-Type:application/json
5. Body : raw, JSON
*/
import axios from "axios";
async function createIssue() {
    const response = await axios.post("https://manual-testing-demoproject.atlassian.net/rest/api/2/issue", 
    /**************Request Body********** */
    {
        "fields": {
            "project": {
                "key": "PA"
            },
            "issuetype": {
                "name": "Bug"
            },
            "summary": "Test case for login functonality created through Playwright API",
            "description": "Checking the login functionality"
        }
    }, 
    /**************Headers********** */
    {
        headers: {
            "Content-Type": "application/json"
        },
        /**************Authorization********** */
        auth: {
            "username": "ravindranr90@gmail.com",
            "password": "ATATT3xFfGF0Blpk51aZoe14iPrtROU-Yhpi7G-SymCDPNx51O7ndOn4lIrxtu8hgHoDcevQP9I1S21xNKJQCt6ipwFyPso00WnSEeyuP6EQ5_BkycC-98gWYLLza0WRTj4MOEyAW9zYsOSUPSbT1lLzYJSYAK75kHDoO4P27omjI80yyxiM3V8=53017E07"
        }
    });
    console.log(response.data);
}
createIssue();

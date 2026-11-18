import test from "@playwright/test";
import login from '../../Data/data.json'
test.describe.serial('Running test in serial mode',()=>{


 for(let data of login){
 test(`Learn to read data from json file ${data.TestCaseId}`,async({page})=>{
     await page.goto('https://login.salesforce.com')
     await page.locator('[id="username"]').fill(data.userName)
     await page.locator('[id="Login"]').click()
     await page.locator('[id="password"]').fill(data.password)
     await page.locator('//input[@class="button r4 wide primary"]').click()
 } 
)}})

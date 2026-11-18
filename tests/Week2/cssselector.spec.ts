import test from "@playwright/test";
test('learn basic cssselectors',async({page})=>{
     await page.goto('https://leaftaps.com/opentaps/control/login')
     await page.locator('#username').fill('yuvarani.sekar@testleaf.com')
     await page.locator('#login').click()
     await page.locator('#password').fill('TestLeaf@2028')
     
    })

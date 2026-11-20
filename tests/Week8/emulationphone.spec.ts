import  { test, devices } from "@playwright/test";


test.use({
         ...devices['iPhone 12']

})
test('Device Emulation',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
})

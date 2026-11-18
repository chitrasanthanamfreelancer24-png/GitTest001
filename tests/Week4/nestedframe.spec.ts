import test from "@playwright/test";
test('Learn frame using framelocator',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')
    const frame = page.frameLocator('iframe')

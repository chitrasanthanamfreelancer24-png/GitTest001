import { test, expect } from '@playwright/test';

test('ServiceNow End-to-End Service Catalog Checkout Workflow', async ({ page }) => {
    // 1. Launch browser and navigate to Service Now application URL
    await page.goto('https://dev330545.service-now.com');

    // 2. Login using valid admin credentials
    await page.locator('[id="user_name"]').fill('Admin');
    await page.locator('[id="user_password"]').fill('TkA5z3JBzp//'); // Ensure your password is correct
    await page.getByRole('button', { name: 'Log in', exact: true }).click();

    // 3. Verify Service Now home page is displayed
    await page.waitForURL(/.*\/now\/nav\/ui\/home/);
    // Verifies that the primary navigation sidebar or framework is active
    await expect(page.locator('macroponent-f51e5bca5302101024d5ddeeff7b1287')).toBeVisible({ timeout: 15000 });

    // 4. Navigate to All → Service Catalog
    // Opens the navigation filter sidebar panel
    await page.getByRole('button', { name: 'All', exact: true }).click();
    
    // Type and click the Service Catalog application link inside the navigator
    const filterInput = page.getByPlaceholder('Filter');
    await filterInput.fill('Service Catalog');
    await page.locator('span:has-text("Service Catalog")').first().click();

    // 5. Switch to Service Catalog iframe
    // ServiceNow loads the core catalog modules inside the standard gsft_main content frame
    const catalogFrame = page.frameLocator('#gsft_main');

    // 6. Select Mobiles category
    // Interacting inside the designated iframe context
    await catalogFrame.getByRole('link', { name: 'Mobiles', exact: true }).click();

    // 7. Choose Apple iPhone 13 Pro
    await catalogFrame.getByRole('link', { name: 'Apple iPhone 13 Pro', exact: true }).click();

    // 8. Configure all required options
    // Example standard options configuration (adjust based on your exact variable field labels)
    const monthlyAllowanceDropdown = catalogFrame.getByLabel('Monthly allowance');
    if (await monthlyAllowanceDropdown.isVisible()) {
        await monthlyAllowanceDropdown.selectOption({ label: 'Unlimited' });
    }

    const colorRadio = catalogFrame.getByLabel('Gold');
    if (await colorRadio.isVisible()) {
        await colorRadio.check();
    }

    // 9. Click Order Now
    await catalogFrame.getByRole('button', { name: 'Order Now', exact: true }).click();

    // 10. Verify order confirmation message
    // ServiceNow standard request tracking labels appear post-submission (REQS / Stages)
    const confirmationMsg = catalogFrame.locator('text=Thank you, your request has been submitted');
    await expect(confirmationMsg).toBeVisible({ timeout: 20000 });

    // 11. Capture full-page screenshot for instance verification
    await page.screenshot({ 
        path: 'reports/screenshots/servicenow-order-confirmation.png', 
        fullPage: true 
    });
});
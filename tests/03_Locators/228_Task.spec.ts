import {test, expect} from '@playwright/test'

test("TC 2, Verify on login make appointment is visible or not.", async ({page}) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/", {
        waitUntil: 'domcontentloaded', 
        timeout: 3000,
    });

    let MAButton = page.locator('#btn-make-appointment');
    await MAButton.click();

    let userName = page.locator('#txt-username');
    let password = page.locator('#txt-password');
    let loginButton = page.locator('#btn-login');

    await userName.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();

    //await expect( page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();

    await expect( page.locator('div.col-sm-12.text-center h2')).toHaveText('Make Appointment');

    await page.pause();

});
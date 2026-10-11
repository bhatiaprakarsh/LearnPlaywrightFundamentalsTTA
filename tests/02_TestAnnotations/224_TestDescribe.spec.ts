import {test, expect} from '@playwright/test';

test.describe('Login Tests', () => {

    test('Valid credentials', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
    });

    test('Invalid credentials', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
    });
    test.skip('msg', async ({page})=> {
        //never executes
    });
}); 


//above test cases are grouped together
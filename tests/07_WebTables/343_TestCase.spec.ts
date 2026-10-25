import {test, expect, Locator} from '@playwright/test';

test('Test Case', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td/input").click();

    await page.pause();



    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator('input').first().click();

    //or 
    //await page.locator("tr:has(td:text('Rohan.Mehta')) input").first().click();
    await page.waitForTimeout(15000);

    
});
import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {     // async function with arrow function syntax
  await page.goto('https://app.testingacademy.com/login');
  //Promise<Response  - > goto returns a promise that resolves to a Response object when the navigation is complete.
});

test("BCP - in app.vwo.com two roles", async ({ browser }) => {

    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestConetxt = await browser.newContext();

    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.thetestingacademy.com/playwright/");

    let userPage = await userContext.newPage();
    await userPage.goto("https://sdet.live");

    let guestPage = await guestConetxt.newPage();
    await guestPage.goto("https://scrolltest.com");

    await adminPage.close();
    await userPage.close();
    await guestPage.close();
});



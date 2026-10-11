import {test, expect} from '@playwright/test'

test("Verify the error msg", async ( {page} ) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    if (!email || !password) {
        throw new Error('Set TEST_EMAIL and TEST_PASSWORD before running this login example.');
    }

    await page.goto("https://app.wingify.com/#/login");
    await page.getByRole('textbox', {name: "Email"}).fill(email);
    await page.getByRole('textbox', {name: "password"}).fill(password);

    await page.getByRole('textbox', {name: "Remember me"}).click();

    await page.pause();
})






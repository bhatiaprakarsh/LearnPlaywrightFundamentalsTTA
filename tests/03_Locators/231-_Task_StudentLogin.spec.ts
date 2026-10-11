import {test, expect} from '@playwright/test';

test('Verify the Student login and check the URL.', async ({page}) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    if (!email || !password) {
        throw new Error('Set TEST_EMAIL and TEST_PASSWORD before running this login example.');
    }

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    const previousUrl = page.url();

    await page.locator("//input[@name='email']").fill(email);
    await page.locator("//input[@name='password']").fill(password);

    await page.locator("//button[@class='login-btn']").click();
    await expect(page).not.toHaveURL(previousUrl);
})
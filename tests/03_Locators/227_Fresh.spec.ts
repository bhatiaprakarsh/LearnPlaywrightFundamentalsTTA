import {test, expect, selectors} from '@playwright/test'

test('TC1 Verify that the VWO page is loaded', async ({page})=> {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    if (!email || !password) {
        throw new Error('Set TEST_EMAIL and TEST_PASSWORD before running this login example.');
    }

    await page.goto("https://app.vwo.com", {
        waitUntil: 'domcontentloaded', 
        timeout: 3000, 
        referer: 'https://sdet.live',
    });

    //Default Locators:
    //id, name, clasName, Tag, Custom locators (via CSS selectors)

    // CSS selectors -> Browser - CSS Engine help you to find the element by using the default locators

    // id -> #id
    // className => .
    // name => [name = "value"]\
    // Tag => [tag]


    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder"
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // > 

    let userNameField = page.locator("#login-username");   //no await is req
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn") 

    await userNameField.fill(email);
    await passwordField.fill(password);
    await loginButton.click();

    let errorMsg = page.locator('#js-notification-box-msg');
    await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");

    await page.pause();
});
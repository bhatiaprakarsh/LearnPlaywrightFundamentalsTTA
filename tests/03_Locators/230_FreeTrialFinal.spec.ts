import {test, expect} from '@playwright/test'

test("TC 1 ERROR Msg check", async({page})=> {

    await page.goto("https://wingify.com/free-trial/");

    let bE = page.locator('input[class="WInput"]');
    await bE.fill("abccd");

    await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox').click();
    // await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox').click();
    await page.locator('[data-qa="free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox"]').click();

    let errorMsg = page.locator('//div[contains(@class,"invalid-reason")]').first();
    
    await page.locator('//button[@data-qa="page-su-submit"]').first().click();

    let errorMessageText = await errorMsg.textContent();
    expect(errorMessageText).toContain("The email address you entered is incorrect.");

    await page.pause();

});
import { test, expect } from "@playwright/test";

test("TC 3, Verify the error msg on Free trial wingify", async ({ page }) => {
  await page.goto("https://wingify.com/free-trial/");

  //await page.locator("#free-trial-step1-email").fill("prakarsh@gmail.com");
  await page
    .locator('//input[@id="free-trial-step1-email"]')
    .fill("prakarsh@gmail.com");

  await page
    .locator(
      '//input[@id="free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox"]',
    )
    .click();

  await page
    .locator(
      '//input[@id="free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox"]',
    )
    .click();

  await page.locator('//button[@data-qa="page-su-submit"]').first().click();

  await page.pause();
});

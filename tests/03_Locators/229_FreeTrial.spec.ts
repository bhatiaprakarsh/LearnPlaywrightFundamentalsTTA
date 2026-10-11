import {test, expect} from '@playwright/test'

test("TC 3, Verify the error msg on Free trial wingify", async ({page}) => {
    

    await page.goto("https://wingify.com/free-trial/")
    //let businessEmail = page.locator("//input[@data-qa='page-su-step1-v1-email']");

    let businessEmail2 = page.locator("//input[@id='free-trial-step1-email']");
    //'#free-trial-step1-email'  - we can also use this

    await businessEmail2.fill("playwright.demo@gmail.com");
    await page.waitForTimeout(1000); 

    const errorMsg = page.locator(
    ".C\\(\\-wingify-cherry-rich\\).invalid-reason"
  );

  // Playwright waits for the error message automatically
  await expect(errorMsg).toHaveText(
    "gmail.com doesn't look like a business domain. Please use your business email.",
    { timeout: 5000 }
  );
  
    await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox').click();

    await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox').click();


    // let errorMsg = page.locator('.C(--wingify-cherry-rich) WBodyXS Trsp(--wingify-transition-op) Trsdu(0.15s) Op(0) invalid-input+Op(1) invalid-reason');


    

    await page.pause();

});

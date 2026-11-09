import { test, expect, selectors } from "@playwright/test";

test("TC1 Verify that the VWO page is loaded", async ({ page }) => {
  await page.goto("https://app.vwo.com");

  let userNameField = page.locator('[class="text-input W(100%)"]');
  //let userNameField = page.locator('[type="email"]');

  let passwordField = page.locator("#login-password");
  let loginButton = page.locator("#js-login-btn");

  await userNameField.fill("akkkk@123.com");
  await passwordField.fill("9839484");
  await loginButton.click();

  let errorMsg = page.locator("#js-notification-box-msg");
  await expect(errorMsg).toContainText(
    "Your email, password, IP address or location did not match",
  );

  await page.pause();
});

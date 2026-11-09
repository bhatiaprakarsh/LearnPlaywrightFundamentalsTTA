import { test, expect, Locator } from "@playwright/test";

test("Test Case To file QA Profile Form", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/practice#page",
  );
  await page.locator("#first-name").fill("Prakarsh");
  await page.locator("#last-name").fill("Bhatia");
  await page.locator('input[data-testid="gender-male"]').click();
  await page.selectOption("#years-experience", "2");
  await page.locator(data-testid:"profile-date").fill("12-06-2001");

  await page.pause();
});

import { test, expect, Locator } from "@playwright/test";

test("Test Case Simple Dropdown", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");

  await page.locator("#dropdown").click();

  await page.selectOption("#dropdown", "Option 2");

  await page.pause();
});

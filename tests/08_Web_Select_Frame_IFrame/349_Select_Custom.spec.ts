import { test, expect, Locator } from "@playwright/test";

test("Test Case Custom Dropdown", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/dropdowns",
  );

  await page.getByTestId("lang-trigger").click();
  //await page.getByRole("option", { name: "JavaScript" }).click();

  await page.getByText("JavaScript", { exact: true }).first().click();

  await page.getByTestId("experience-trigger").click();

  //await page.getByRole("option", { name: "Mid-level (4-6 years)" }).click();

  await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

  await page.pause();
});

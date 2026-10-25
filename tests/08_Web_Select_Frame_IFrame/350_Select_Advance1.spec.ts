import { test, expect, Locator } from "@playwright/test";

test("Test Case Advance Dropdowns ", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/select-boxes",
  );

  //① Single — searchable
  await page.getByTestId("rs-single").click();
  await page.getByText("Cypress").click();

  //② Multi — chips with remove
  await page.getByTestId("rs-multi").click();
  await page.getByText("JUnit").click();
  await page.getByText("Pytest", { exact: true }).click();
  await page.keyboard.press("Escape");

  //③ Creatable multi — type and Enter
  await page.getByTestId("rs-creatable").click();
  await page.getByText("Performance").click();
  await page.getByText("api-testing").click();
  await page.getByText("accessibility").click();
  await page.keyboard.press("Escape");

  //④ Grouped — categorised options

  //⑤ Async — fetched on type

  await page.locator("#rs-async").click();
  await page.getByTestId("rs-async-input").fill("pun");
  await expect(page.getByTestId("rs-async-menu")).toContainText("Pune");
  await page.getByRole("option", { name: "Pune", exact: true }).click();

  await page.pause();
});

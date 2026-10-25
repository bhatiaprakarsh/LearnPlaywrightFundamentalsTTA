import { test, expect, Locator, Page } from "@playwright/test";

async function findRowByName(page: Page, name: string): Promise<Locator> {
  let row: Locator;
  while (true) {
    row = page.locator("#employees-tbody tr").filter({ hasText: name });
    if (await row.count()) {
      return row;
    }
    const next = page.getByTestId("next-page");
    if (await next.isDisabled()) {
      throw new Error(`Not found: ${name}`);
    }
    await next.click();
  }
}

test("Test Case webtable + pagination", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/webtable",
  );

  let name: string = "Luca Greco";
  const row = await findRowByName(page, name);
  const email = await row.locator('td[data-col="email"]').innerText();
  const country = await row.locator('td[data-col="country"]').innerText();

  console.log(email, country);
  await page.pause();
});

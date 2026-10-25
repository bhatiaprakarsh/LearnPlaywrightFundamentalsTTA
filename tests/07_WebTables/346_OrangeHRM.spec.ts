import { test, expect, Locator } from "@playwright/test";

test("Verify the working of Orange HRM by adding new employee and the delete.", async ({
  page,
}) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill("admin123");

  page.locator('button[type="submit"]').click();

  await page.locator("a.oxd-main-menu-item").filter({ hasText: "PIM" }).click();

  await page
    .locator('button[type="button"]')
    .filter({ hasText: "Add" })
    .click();

  await page.locator('input[name="firstName"]').fill("Prakarsh");
  await page.locator('input[name="lastName"]').fill("Bhatia");
  await page
    .locator('button[type="button"]')
    .filter({ hasText: "Save" })
    .first()
    .click();

  await page
    .locator("a.oxd-topbar-body-nav-tab-item")
    .filter({ hasText: "Employee List" })
    .first()
    .click();

  //   const employeeRow = page
  //     .locator(".oxd-table-card")
  //     .filter({ hasText: "Prakarsh Bhatia" });

  await page.pause();
});

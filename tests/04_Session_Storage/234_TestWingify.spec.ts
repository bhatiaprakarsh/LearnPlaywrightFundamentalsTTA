import { test, expect} from "@playwright/test";
import path from "path";

test.use({
    storageState: path.resolve(process.cwd(), "user-session.json")
});

test("Verify go directly to dashboard - no login", async({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1288697");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded - no login needed.");
    await page.waitForTimeout(3000);
});


test("Verify go directly to dashboard - Test 2", async({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1288697");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded - no login needed.");
    await page.waitForTimeout(3000);
});



test("Verify go directly to dashboard - Test 3", async({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1288697");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded - no login needed.");
    await page.waitForTimeout(3000);
});
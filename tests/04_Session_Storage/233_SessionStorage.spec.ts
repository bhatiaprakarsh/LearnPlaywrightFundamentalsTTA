import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

test("Save authenticated VWO session", async ({ browser }) => {
    if (!VWO_USER || !VWO_PASS) {
        throw new Error("Set VWO_USER and VWO_PASS in your .env file before running this test.");
    }

    const context = await browser.newContext();
    try {
        const page = await context.newPage();
        await page.goto("https://app.wingify.com/#/login");
        await page.getByRole("textbox", { name: "Email" }).fill(VWO_USER);
        await page.getByRole("textbox", { name: "password" }).fill(VWO_PASS);
        await page.locator("#js-login-btn").click();

        await expect(page).toHaveURL(/#\/dashboard/, { timeout: 15000 });
        await context.storageState({ path: "./user-session.json" });
    } finally {
        await context.close();
    }
});
import{ chromium, Browser, BrowserContext, Page } from 'playwright';


async function run() {
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched", browser);

    await const context: BrowserContext = await browser.newContext();


    let context: BrowserContext = await browser.newContext();
    console.log("Context Created", context);

    let page: Page = await context.newPage();
    console.log("Page opened", page);

    await page.close();
    await context.close();
    await browser.close();

    
}

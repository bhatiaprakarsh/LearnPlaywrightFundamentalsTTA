import {test, expect} from '@playwright/test'

test('Verify X', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
});


//page.goto ----have waitUntil - option tells PW at which stage it should consider the page "loaded" and move to the nxt line of your test



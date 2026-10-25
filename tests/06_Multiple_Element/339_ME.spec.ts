import {test, expect, Locator} from '@playwright/test'

test('Verify handling of Multiple element' ,async({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");


    const rightPanelTextList : Locator[] = await page.locator('a.list-group-item').all();

    console.log(rightPanelTextList.length);

    for(const link of rightPanelTextList){
        console.log(link);
    }

    for(const link of rightPanelTextList){
        console.log(await link.getAttribute('href'));
    }
    await page.pause();
});
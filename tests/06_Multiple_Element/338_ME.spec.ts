import {test, expect} from '@playwright/test'

test('Verify handling of Multiple element' ,async({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelTextList : string[] = await page.locator('a.list-group-item').allInnerTexts();
    //console.log(rightPanelTextList.length);
    for(const link of rightPanelTextList){
        console.log(link);
    }
    for(const linkText of rightPanelTextList){
        if(linkText === "Recurring Payments"){
            await page.getByText(linkText).first().click();
        }
    }
    await page.pause();
});
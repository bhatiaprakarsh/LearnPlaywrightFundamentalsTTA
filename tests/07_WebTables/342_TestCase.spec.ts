import {test, expect, Locator} from '@playwright/test';

test('verify test case multiple-element filter', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    // const rightPanelTextList : string[] = await page.locator('a.list-group-item').allInnerTexts();
    // //console.log(rightPanelTextList.length);
    // for(const link of rightPanelTextList){
    //     console.log(link);
    // }
    // for(const linkText of rightPanelTextList){
    //     if(linkText === "Recurring Payments"){
    //         await page.getByText(linkText).first().click();
    //     }
    // }

    const rightPanelTextLink = page.locator('a.list-group-item').filter({hasText : 'Recurring Payments'});
    await rightPanelTextLink.click();


    const privacyLink = page.locator('footer a').filter({hasText: 'Privacy Policy'});
    await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');
    await privacyLink.click();

    await page.pause();
});
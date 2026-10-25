import {test, expect, Locator} from '@playwright/test';

test('Test Case to automate the we b table', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //tbody[@id="employee-body"]/tr

    const firstPart = '//tbody[@id="employee-body"]/tr[';
    const secondPart = ']/td[';
    const thirdPart = ']';

    let rows = await page.locator('//tbody[@id="employee-body"]/tr').count();
    let col = await page.locator('//tbody[@id="employee-body"]/tr[1]/td').count();

    for(let i=1; i<=rows; i++){
        for(let j=1; j<=col;j++){
            const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicXpath).innerText();

            if(data.includes('Rohan Mehta')){
                const button = `${dynamicXpath}/preceding-sibling::td[2]`;
                await page.locator(button).click();
            }
        }
    }
});
import {test, expect, Locator} from '@playwright/test';

test('Verify Test Case Web Table Example 1', async ({page}) => {
    await page.goto("https://awesomeqa.com/webtable.html");

    //XPath for helen - //table[@id='customers']/tbody/tr[5]/td[2]
    //Problem - this is dynamic

    //table[@id='customers']/tbody/tr[5]/td[2]/following-sibling::td -> country
    //table[@id='customers']/tbody/tr[5]/td[2]/preceding-sibling::td -> company



    //PATTERN
    ////table[@id='customers']/tbody/tr[5]/td[2]
    //i = 1 to 7  we will take 2 to 7 (1 is header)
    //]/td[
    //j = 1, 2, 3
    //]    -(closing)


    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const  rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const  columns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for(let i =2; i<=rows; i++){
        for (let j = 1; j <=columns; j++){
            const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicXpath);
            const data = await page.locator(dynamicXpath).innerText();
            //console.log(data);


            if(data.includes('Helen Bennett')){
                const countryPath  = `${dynamicXpath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();

                console.log(`Helen bennett is in - ${countryText}`);
            }

        }
    }
});
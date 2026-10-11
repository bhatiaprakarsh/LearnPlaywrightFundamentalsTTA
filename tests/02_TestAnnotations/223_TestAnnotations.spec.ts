import {test, expect} from '@playwright/test';

test.skip('Test Annotations', async ({ page }) => {
    //never run this test
});


// test.fail('Test Annotations', async ({ page }) => {
//     //this test is expected to fail
//     expect(1).toBe(2);  //returns 1 thats why fails
//     await expect(page).toHaveTitle('This title will never be found');
// });

// test.only('Test Annotations', async ({ page }) => {
//     //only this test will run
//     await page.goto('https://playwright.dev/');
//     await expect(page).toHaveTitle(/Playwright/);
// });

test('This test will be slower', async ({ page }) => {
    //this test is expected to be slow
    test.slow();
    console.log('This test will be slower');
}); 

test('This test will be fixed', async ({ page, browserName }) => {
    //this test is expected to be retried
    test.fixme(browserName === 'firefox', 'This test is flaky on Firefox');
});



//above test cases are not grouped together
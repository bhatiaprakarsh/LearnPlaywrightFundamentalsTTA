test.describe('Login Tests', () => {

    test('Valid credentials', async ({ page }) => {
        await page.goto('https://example.com/login');
    });

    test('Invalid credentials', async ({ page }) => {
        await page.goto('https://example.com/login');
    });

});
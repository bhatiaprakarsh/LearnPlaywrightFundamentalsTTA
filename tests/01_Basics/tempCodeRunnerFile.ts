test('test', async ({ page }) => {
  await page.goto('https://app.testingacademy.com/login');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('bhatiaprakarsh@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testing@12345');
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(5000);

});
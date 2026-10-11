import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;
  if (!email || !password) {
    throw new Error('Set TEST_EMAIL and TEST_PASSWORD before running this login example.');
  }

  await page.goto('https://app.testingacademy.com/login');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(5000);

});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const email = process.env.METTL_EMAIL;
  const password = process.env.METTL_PASSWORD;
  test.skip(!email || !password, 'Set METTL_EMAIL and METTL_PASSWORD to run this test.');

  await page.goto('https://mettl.xyz/corporate/login');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(email!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password!);
  await page.getByRole('button', { name: 'Login to Mettl' }).click();
  await page.waitForTimeout(5000);

});
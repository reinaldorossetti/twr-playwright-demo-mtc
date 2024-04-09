const { webkit } = require('playwright');
const { expect, test } = require('@playwright/test');


test('response interception', async ({ page }) => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await context.route('**/forms/post', route => route.fulfill({
    status: 500,
    body: 'accept',
  }));
    const response = await page.goto('https://playwright.dev');
    expect(response.status()).toBe(200);
    await page.waitForTimeout(10 * 1000)
    await browser.close();
})
();
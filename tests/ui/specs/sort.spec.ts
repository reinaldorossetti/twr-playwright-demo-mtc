import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
});

test.describe('Sort without Page Object Model', () => {
    test(`successfully sort by hilo`, async ({page}) => {
      await page.getByTestId('product_sort_container').selectOption('hilo');
      await expect(page.locator('.inventory_item_price').first()).toHaveText('$49.99');
      await expect(page.locator('.inventory_item_price').last()).toHaveText('$7.99');
    });
});

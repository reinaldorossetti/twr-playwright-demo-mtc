import { type Page, type Locator , expect } from '@playwright/test';

class CartPage {
  
  constructor(readonly page: Page, readonly removeFromCartButton: Locator, 
              readonly checkoutButton: Locator) {
    this.page = page;
    this.removeFromCartButton = page.getByRole('button', { name: 'Remove' });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async checkItemsInCart(items: number){
    await expect(this.removeFromCartButton).toHaveCount(items);
  }

  async goToCheckout(){
    await this.checkoutButton.click();
  }
}

export default CartPage;

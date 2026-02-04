import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addProductToCart(productName: string) {
    const productCard = this.page.locator(".inventory_item", {
      hasText: productName,
    });

    await productCard.getByRole("button", { name: "Add to cart" }).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

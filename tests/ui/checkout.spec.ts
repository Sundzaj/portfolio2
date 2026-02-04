import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";

test.describe("Checkout Flow - SauceDemo", () => {
  test("User can complete checkout successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // login
    await loginPage.goToLoginPage();
    await loginPage.login(
      process.env.STANDARD_USER || "",
      process.env.PASSWORD || "",
    );

    await expect(page).toHaveURL(/inventory\.html/);

    // add product
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await expect(inventoryPage.cartBadge).toHaveText("1");

    // go to cart
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/cart\.html/);

    // checkout
    await cartPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);

    // fill form
    await checkoutPage.fillCheckoutForm("Tester1", "Tester2", "00-001");
    await checkoutPage.clickContinue();

    await expect(page).toHaveURL(/checkout-step-two\.html/);

    // finish order
    await checkoutPage.clickFinish();

    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(checkoutPage.completeHeader).toHaveText(
      "Thank you for your order!",
    );
  });
});

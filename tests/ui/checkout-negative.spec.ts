import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";

test.describe("Checkout Negative - SauceDemo", () => {
  test("User cannot continue checkout without postal code", async ({
    page,
  }) => {
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

    // add product
    await inventoryPage.addProductToCart("Sauce Labs Backpack");

    // go to cart
    await inventoryPage.goToCart();

    // checkout
    await cartPage.clickCheckout();

    await expect(page).toHaveURL(/checkout-step-one\.html/);

    // fill form WITHOUT postal code
    await checkoutPage.fillCheckoutForm("Tester1", "Tester2", "");
    await checkoutPage.clickContinue();

    // assert error
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText(
      "Postal Code is required",
    );
  });
});

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";

test.describe("Cart - SauceDemo", () => {
  test("User can add product to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login(
      process.env.STANDARD_USER || "",
      process.env.PASSWORD || "",
    );
    await expect(page).toHaveURL(/inventory\.html/);
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await expect(inventoryPage.cartBadge).toHaveText("1");
    await expect(page.getByRole("button", { name: "Remove" })).toBeVisible();
  });
});

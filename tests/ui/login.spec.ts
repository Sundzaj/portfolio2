import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Login - SauceDemo", () => {
  test("User can login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();

    await loginPage.login(
      process.env.STANDARD_USER || "",
      process.env.PASSWORD || "",
    );

    await expect(page).toHaveURL(/inventory\.html/);
  });
});

import { test, expect } from "@playwright/test";

test.describe("API Tests - JSONPlaceholder", () => {
  test("GET /posts/1 should return correct post data", async ({ request }) => {
    const start = Date.now();
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const duration = Date.now() - start;

    expect(duration).toBeLessThan(2000);
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty("id", 1);
    expect(body).toHaveProperty("userId");
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");
    expect(typeof body.title).toBe("string");
    expect(body.title.length).toBeGreaterThan(0);
  });
});

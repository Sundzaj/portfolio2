import { test, expect } from "@playwright/test";

test.describe("API Tests - JSONPlaceholder", () => {
  test("POST /posts should create a new post", async ({ request }) => {
    const newPost = {
      title: "Playwright API Test",
      body: "This is a sample post created by Playwright API test.",
      userId: 1,
    };

    const response = await request.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        data: newPost,
      },
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toHaveProperty("id");
    expect(body.title).toBe(newPost.title);
    expect(body.body).toBe(newPost.body);
    expect(body.userId).toBe(newPost.userId);
    expect(typeof body.id).toBe("number");
  });
});

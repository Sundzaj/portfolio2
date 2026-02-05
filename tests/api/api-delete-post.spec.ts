import { test, expect } from "@playwright/test";

test.describe("API Tests - JSONPlaceholder", () => {
  test("DELETE /posts/1 should delete post successfully", async ({
    request,
  }) => {
    const response = await request.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    expect([200, 204]).toContain(response.status());

    const bodyText = await response.text();

    // JSONPlaceholder returns empty body for DELETE
    expect(bodyText === "" || bodyText === "{}").toBeTruthy();
  });
});

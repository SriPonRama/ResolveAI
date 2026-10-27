import { describe, it, expect } from "vitest";
import { env } from "./env";

describe("Environment Configuration", () => {
  it("should load environment variables with mock defaults", () => {
    expect(env).toBeDefined();
    expect(env.PAYPAL_MODE).toBe("mock");
    expect(env.DATABASE_URL).toBe("file:./dev.db");
    expect(env.APP_URL).toBe("http://localhost:3000");
  });
});

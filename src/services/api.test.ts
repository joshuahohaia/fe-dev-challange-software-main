import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import apiService from "./api";

const mock = new MockAdapter(axios);

describe("ApiService", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should throw error for network error", async () => {
    mock.onGet("/test").networkError();

    await expect(apiService["request"]<any>("get", "/test")).rejects.toThrow(
      "API request failed"
    );
  });
});

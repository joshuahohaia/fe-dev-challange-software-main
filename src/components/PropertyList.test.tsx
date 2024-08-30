import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import PropertyList from "./PropertyList";
import apiService from "../services/api";
import { Property } from "../types/property";

// Mock the apiService
vi.mock("../services/api");

const mockProperties: Property[] = [
  {
    id: "1",
    image: "https://via.placeholder.com/150",
    bedrooms: 3,
    address: "123 Main St",
    price: "$500,000",
    status: "active",
  },
  {
    id: "2",
    image: "https://via.placeholder.com/150",
    bedrooms: 2,
    address: "456 Elm St",
    price: "$300,000",
    status: "active",
  },
];

describe("PropertyList", () => {
  beforeEach(() => {
    (apiService.getProperties as vi.Mock).mockResolvedValue(mockProperties);
  });

  it("renders PropertyList with properties", async () => {
    render(<PropertyList />);

    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument();
    });

    mockProperties.forEach((property) => {
      expect(screen.getByText(property.address)).toBeInTheDocument();
      expect(screen.getByText(property.price)).toBeInTheDocument();
      expect(
        screen.getByText(`${property.bedrooms} Bedrooms`)
      ).toBeInTheDocument();
    });
  });

  it("displays error message on fetch failure", async () => {
    (apiService.getProperties as vi.Mock).mockRejectedValue(
      new Error("Failed to fetch properties")
    );

    render(<PropertyList />);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Failed to fetch properties"
      );
    });
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import PropertyCard, { PropertyCardProps } from "./PropertyCard";
import useToggleStatus from "../hooks/useToggleStatus";

// Mock the useToggleStatus hook
vi.mock("../hooks/useToggleStatus");

const mockToggleStatus = vi.fn();
const mockUseToggleStatus = useToggleStatus as jest.MockedFunction<typeof useToggleStatus>;

const mockProps: PropertyCardProps = {
  image: "https://via.placeholder.com/150",
  bedrooms: 3,
  address: "123 Main St",
  price: "$500,000",
  status: "active",
};

describe("PropertyCard", () => {
  beforeEach(() => {
    mockUseToggleStatus.mockReturnValue({
      status: mockProps.status,
      toggleStatus: mockToggleStatus,
    });
  });

  it("renders PropertyCard with correct information", () => {
    render(<PropertyCard {...mockProps} />);

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      `Property at ${mockProps.address} with ${mockProps.bedrooms} bedrooms, priced at ${mockProps.price}. Status: ${mockProps.status}. Click to toggle status.`
    );
    expect(screen.getByAltText(`Image of property at ${mockProps.address}`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.address)).toBeInTheDocument();
    expect(screen.getByText(mockProps.price)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.bedrooms} Bedrooms`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Status: ${mockProps.status}`)).toBeInTheDocument();
  });

  it("toggles status on click", () => {
    render(<PropertyCard {...mockProps} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockToggleStatus).toHaveBeenCalled();
  });

  it("displays loading state initially", () => {
    render(<PropertyCard {...mockProps} />);

    expect(screen.getByRole("img")).toHaveClass("opacity-0");
  });

  it("removes loading state after image loads", () => {
    render(<PropertyCard {...mockProps} />);

    const image = screen.getByRole("img");
    fireEvent.load(image);

    expect(image).not.toHaveClass("opacity-0");
  });
});

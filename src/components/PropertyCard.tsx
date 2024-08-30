import React, { useState } from "react";
import useToggleStatus from "../hooks/useToggleStatus";

export interface PropertyCardProps {
  image: string;
  bedrooms: number;
  address: string;
  price: string;
  status: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  bedrooms,
  address,
  price,
  status: initialStatus,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { status, toggleStatus } = useToggleStatus(initialStatus);

  return (
    <div
      className="p-4 bg-white w-full shadow-md rounded-lg cursor-pointer"
      onClick={toggleStatus}
      role="button"
      aria-pressed={status === "active"}
      aria-label={`Property at ${address} with ${bedrooms} bedrooms, priced at ${price}. Status: ${status}. Click to toggle status.`}
    >
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        {isLoading && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            aria-hidden="true"
          ></div>
        )}
        <img
          src={image}
          alt={`Image of property at ${address}`}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            isLoading
              ? "opacity-0"
              : status === "active"
              ? "opacity-100"
              : "opacity-50 grayscale"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <div
          className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-semibold rounded-lg bg-opacity-75 ${
            status === "active" ? "bg-green-500" : "bg-red-500"
          }`}
          aria-label={`Status: ${status}`}
        >
          {status}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-base sm:text-lg font-semibold">{address}</p>
        <p className="mt-2 text-lg sm:text-xl font-bold">{price}</p>
        <div className="flex justify-between mt-2 text-sm sm:text-base">
          <p>{bedrooms} Bedrooms</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

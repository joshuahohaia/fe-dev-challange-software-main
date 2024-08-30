import React, { useState } from "react";

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
  status,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="p-4 bg-white w-full shadow-md rounded-lg">
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={image}
          alt="Property"
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="mt-4">
        <p className="text-base sm:text-lg font-semibold">{address}</p>
        <p className="mt-2 text-lg sm:text-xl font-bold">{price}</p>
        <div className="flex justify-between mt-2 text-sm sm:text-base">
          <p>{bedrooms} Bedrooms</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

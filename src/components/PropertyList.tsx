import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import apiService from "../services/api";
import { Property } from "../types/property";

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getProperties();
        setProperties(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch properties");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {error ? (
        <div>{error}</div>
      ) : (
        properties.map((property: Property) => (
          <PropertyCard key={property.id} {...property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;

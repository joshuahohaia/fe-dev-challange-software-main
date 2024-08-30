import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../services/api";

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {properties.map((property: any) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyList;

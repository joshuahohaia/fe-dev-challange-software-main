import React from "react";
import PropertyList from "../components/PropertyList";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <PropertyList />
    </>
  );
};

export default Home;

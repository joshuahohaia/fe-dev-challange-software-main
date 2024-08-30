import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav
      className="bg-white p-4 flex justify-between items-center border-b border-gray-200"
      aria-label="Main navigation"
    >
      <div
        className="text-black font-sans text-2xl"
        role="heading"
        aria-level={1}
      >
        Estate Agent Property Manager
      </div>
    </nav>
  );
};

export default NavBar;

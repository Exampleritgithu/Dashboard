import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold flex gap-2">Hello Evano
        <img src="wave.png" alt="Dashboard Icon" className="w-6 h-6" />
      </h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        
      </div>
    </header>
  );
};

export default Header;

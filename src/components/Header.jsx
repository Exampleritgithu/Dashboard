import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      {/* Left Section */}
      <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
        Hello Evano
        <img src="wave.png" alt="Dashboard Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
      </h2>

      {/* Right Section */}
      <div className="flex items-center w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-2 w-full sm:w-64 text-sm sm:text-base"
        />
      </div>
    </header>
  );
};

export default Header;

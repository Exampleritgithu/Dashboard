import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;

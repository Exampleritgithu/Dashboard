import React from "react";

const Sidebar = () => {
  const menuItems = ["Dashboard", "Customers", "Reports", "Settings"];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">CRM Dashboard</h1>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

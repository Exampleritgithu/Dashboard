import React from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  DollarSign,
  Megaphone,
  HelpCircle,
  Plus,
  ArrowBigLeft,
  ArrowBigRight,
} from "lucide-react"; // install lucide-react: npm install lucide-react

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Product", icon: <ShoppingBag size={18} /> },
    { name: "Customers", icon: <Users size={18} /> },
    { name: "Income", icon: <DollarSign size={18} /> },
    { name: "Promote", icon: <Megaphone size={18} /> },
    { name: "Help", icon: <HelpCircle size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white text-gray-400 shadow-md flex flex-col p-4">
      {/* Title with Dashboard Icon */}
      <h1 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
        <img src="/dashboard-icon.png" alt="Dashboard Icon" className="w-6 h-6" />
        Dashboard
      </h1>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex justify-between items-center hover:bg-blue-700 hover:text-white px-3 py-2 rounded"
          >
            {/* Left Icon + Name */}
            <span className="flex items-center gap-2">
              {item.icon}
              {item.name}
            </span>
            {/* Add Icon at End */}
            <ArrowBigRight size={16} />
          </a>
        ))}
      </nav>
      <div className=" mt-48 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 flex flex-col items-center text-center">
  <p className="mb-3 font-medium ">
    Upgrade to PRO get <br />  access to all features
  </p>
  <button className="rounded-full px-5 py-2 bg-white font-bold text-black shadow-md hover:bg-gray-100">
    Get Pro Now!
  </button>
</div>

      
    </aside>
    
  );
};

export default Sidebar;

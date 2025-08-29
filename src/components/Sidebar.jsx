import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  DollarSign,
  Megaphone,
  HelpCircle,
  ArrowBigRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Product", icon: <ShoppingBag size={18} /> },
    { name: "Customers", icon: <Users size={18} /> },
    { name: "Income", icon: <DollarSign size={18} /> },
    { name: "Promote", icon: <Megaphone size={18} /> },
    { name: "Help", icon: <HelpCircle size={18} /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md flex flex-col p-4 transition-all duration-300 z-40
          ${isOpen ? "w-64" : "w-16"} 
          md:static md:w-64`}
      >
        {/* Title (show only if open OR on desktop) */}
        {(isOpen || window.innerWidth >= 768) && (
          <h1 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <img
              src="/dashboard-icon.png"
              alt="Dashboard Icon"
              className="w-6 h-6"
            />
            Dashboard
          </h1>
        )}

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex justify-between items-center hover:bg-blue-700 hover:text-white px-3 py-2 rounded"
            >
              <span className="flex items-center gap-2">
                {item.icon}
                {(isOpen || window.innerWidth >= 768) && item.name}
              </span>
              {(isOpen || window.innerWidth >= 768) && (
                <ArrowBigRight size={16} />
              )}
            </a>
          ))}
        </nav>

        {/* Upgrade to Pro (hide on collapsed) */}
        {(isOpen || window.innerWidth >= 768) && (
          <div className="mt-48 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 flex flex-col items-center text-center">
            <p className="mb-3 font-medium">
              Upgrade to PRO get <br /> access to all features
            </p>
            <button className="rounded-full px-5 py-2 bg-white font-bold text-black shadow-md hover:bg-gray-100">
              Get Pro Now!
            </button>
          </div>
        )}

        {/* Profile with arrow */}
        <div className="flex flex-row items-center mt-4">
          <img
            src="M-3.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          {(isOpen || window.innerWidth >= 768) && (
            <>
              <div className="ml-4">
                <h2 className="font-semibold text-black">Anas</h2>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
              <ChevronDown className="ml-auto w-5 h-5 text-gray-600" />
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

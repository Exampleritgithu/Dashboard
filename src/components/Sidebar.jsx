import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  DollarSign,
  Megaphone,
  HelpCircle,
  ArrowBigRight,
  ChevronDown,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Product", path: "/ProductPage", icon: <ShoppingBag size={18} /> },
    { name: "Customers", path: "/customers", icon: <Users size={18} /> },
    { name: "Income", path: "/income", icon: <DollarSign size={18} /> },
    { name: "Promote", path: "/PromotePage", icon: <Megaphone size={18} /> },
    { name: "Help", path: "/HelpPage", icon: <HelpCircle size={18} /> },
  ];

  return (
    <>
      {/* Mobile Dashboard Icon */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-3 bg-white shadow rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <LayoutDashboard size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md flex flex-col p-4 transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64 md:static`}
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
          <img
            src="/dashboard-icon.png"
            alt="Dashboard Icon"
            className="w-6 h-6"
          />
          Dashboard
        </h1>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex justify-between items-center hover:bg-blue-700 hover:text-white px-3 py-2 rounded"
              onClick={() => setIsOpen(false)} // Close on click (mobile)
            >
              <span className="flex items-center gap-2">
                {item.icon} {item.name}
              </span>
              <ArrowBigRight size={16} />
            </Link>
          ))}
        </nav>

        {/* Upgrade to Pro */}
        <div className="mt-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 flex flex-col items-center text-center">
          <p className="mb-3 font-medium">
            Upgrade to PRO get <br /> access to all features
          </p>
          <button className="rounded-full px-5 py-2 bg-white font-bold text-black shadow-md hover:bg-gray-100">
            Get Pro Now!
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-row items-center mt-4">
          <img src="M-3.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <h2 className="font-semibold text-black">Anas</h2>
            <p className="text-sm text-gray-500">Project Manager</p>
          </div>
          <ChevronDown className="ml-auto w-5 h-5 text-gray-600" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

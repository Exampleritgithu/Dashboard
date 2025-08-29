import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for mobile (slide in/out) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="bg-white w-64 shadow-lg">
            <Sidebar />
          </div>
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsOpen(true)} />
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
      {/* Icon */}
      <div className="text-blue-500 text-3xl">{icon}</div>

      {/* Text */}
      <div>
        <h4 className="text-gray-500 text-sm sm:text-base">{title}</h4>
        <p className="text-xl sm:text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

// Example usage with responsive grid
const DashboardCards = () => {
  const stats = [
    { title: "Total Customers", value: "1,200", icon: "👥" },
    { title: "New Members", value: "350", icon: "➕" },
    { title: "Revenue", value: "$12,400", icon: "💰" },
    { title: "Active Users", value: "890", icon: "🟢" },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} title={stat.title} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};

export default DashboardCards;

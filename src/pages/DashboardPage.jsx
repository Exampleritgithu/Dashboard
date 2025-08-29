import React from "react";
import Card from "../components/Card";

const DashboardPage = () => {
  const stats = [
    { title: "Total Customers", value: 1200, icon: "👥" },
    { title: "New Customers", value: 75, icon: "🆕" },
    { title: "Revenue", value: "$24,000", icon: "💰" },
    { title: "Pending Orders", value: 15, icon: "📦" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} {...stat} />
        ))}
      </div>

      <h4 className="text-xl font-semibold mb-2">Recent Customers</h4>
      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Phone</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "John Doe", email: "john@example.com", phone: "1234567890", status: "Active" },
              { name: "Jane Smith", email: "jane@example.com", phone: "0987654321", status: "Pending" },
              { name: "Mike Johnson", email: "mike@example.com", phone: "1112223333", status: "Active" },
            ].map((customer, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;

import React from "react";
import { Users, UserPlus, DollarSign, ArrowUpRight, ArrowDownRight, Monitor } from "lucide-react";

const DashboardPage = () => {
  const stats = [
    { title: "Total Customers", value: 1200, icon: <Users size={40} />, change: "+12%", trend: "up" },
    { title: "Members", value: 75, icon: <UserPlus size={40} />, change: "-5%", trend: "down" },
    { 
      title: "Active Now", 
      value: "164", 
      icon: <Monitor size={40} />, 
      members: ["/M-1.jpg", "/M-2.jpg", "/M-3.jpg", "/M-4.jpg"] 
    },
  ];

  return (
    <div>
      {/* Stats Row */}
      <div className="bg-white shadow rounded-lg p-5 flex justify-between items-center divide-x divide-gray-200">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 px-6">
            {/* Icon Circle */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              {stat.icon}
            </div>

            {/* Text + Change OR Members */}
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>

              {/* If Active Now → show big value + member pics */}
              {stat.members ? (
                <div className="flex items-center gap-3">
                  <h4 className="text-3xl font-extrabold">{stat.value}</h4>
                  <div className="flex   -space-x-2">
                    {stat.members.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                // Default stats with change arrows
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xl font-bold">{stat.value}</h4>
                  {stat.trend === "up" ? (
                    <span className="flex items-center text-green-600 text-sm font-semibold">
                      <ArrowUpRight size={16} className="mr-1" />
                      {stat.change}
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600 text-sm font-semibold">
                      <ArrowDownRight size={16} className="mr-1 " />
                      {stat.change}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Customers Table */}
      <h4 className="text-xl font-semibold mt-8 mb-2">Recent Customers</h4>
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

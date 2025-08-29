import React, { useState } from "react";
import {
  Users,
  UserPlus,
  ArrowUpRight,
  ArrowDownRight,
  Monitor,
  ChevronDown, // dropdown arrow icon
} from "lucide-react";

const DashboardPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort by");

  const stats = [
    {
      title: "Total Customers",
      value: 1200,
      icon: <Users size={32} />,
      change: "+12%",
      trend: "up",
    },
    {
      title: "Members",
      value: 75,
      icon: <UserPlus size={32} />,
      change: "-5%",
      trend: "down",
    },
    {
      title: "Active Now",
      value: 164,
      icon: <Monitor size={32} />,
      members: ["/M-1.jpg", "/M-2.jpg", "/M-3.jpg", "/M-4.jpg"],
    },
  ];

  const customers = [
    { name: "John Doe", email: "john@example.com", phone: "1234567890", company: "TechCorp", country: "USA", status: "Active" },
    { name: "Mike Johnson", email: "mike@example.com", phone: "1112223333", company: "BuildRight", country: "Canada", status: "Active" },
    { name: "Emily Davis", email: "emily@example.com", phone: "2223334444", company: "HealthPlus", country: "Australia", status: "Inactive" },
    { name: "Chris Brown", email: "chris@example.com", phone: "5556667777", company: "MarketHub", country: "Germany", status: "Active" },
    { name: "David Wilson", email: "david@example.com", phone: "7778889999", company: "NextGen", country: "India", status: "Active" },
    { name: "Olivia Taylor", email: "olivia@example.com", phone: "8889990000", company: "EduSmart", country: "USA", status: "Inactive" },
     { name: "Chris Brown", email: "chris@example.com", phone: "5556667777", company: "MarketHub", country: "Germany", status: "Active" },
    { name: "David Wilson", email: "david@example.com", phone: "7778889999", company: "NextGen", country: "India", status: "Active" },
    { name: "Olivia Taylor", email: "olivia@example.com", phone: "8889990000", company: "EduSmart", country: "USA", status: "Inactive" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);

    if (option === "Newest") {
      window.location.href = "/newest"; // ✅ redirect to page
    }
  };

  return (
    <div className="p-4">
      {/* Stats Row */}
      <div className="bg-white shadow rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              {stat.members ? (
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold">{stat.value}</h4>
                  <div className="flex -space-x-2">
                    {stat.members.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="member"
                        className="w-8 h-8 rounded-full border-2 border-black"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold">{stat.value}</h4>
                  {stat.trend === "up" ? (
                    <span className="flex items-center text-green-600 text-sm font-semibold">
                      <ArrowUpRight size={16} className="mr-1" />
                      {stat.change}
                      <span className="ml-1 text-gray-600">this month</span>
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600 text-sm font-semibold">
                      <ArrowDownRight size={16} className="mr-1" />
                      {stat.change}
                      <span className="ml-1 text-gray-600">this month</span>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Customers Title + Search + Sort Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 mb-4 gap-4">
        <h4 className="text-lg font-bold">All Customers</h4>

        <div className="flex gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-2 w-full sm:w-64 text-sm"
          />

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between border rounded px-3 py-2 w-40 font-bold bg-white"
            >
              {selectedOption}
              <ChevronDown size={16} className="ml-2" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                {["Newest", "Oldest", "Active", "Inactive"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full text-xs sm:text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-3 uppercase">Name</th>
              <th className="text-left p-3 uppercase">Email</th>
              <th className="text-left p-3 uppercase">Phone</th>
              <th className="text-left p-3 uppercase">Company</th>
              <th className="text-left p-3 uppercase">Country</th>
              <th className="text-left p-3 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.company}</td>
                <td className="p-3">{customer.country}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded text-xs sm:text-sm font-medium ${
                      customer.status === "Active"
                        ? "bg-green-300 text-green-900"
                        : "bg-red-300 text-red-900"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;

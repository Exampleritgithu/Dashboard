import React from "react";

const ReportsPage = () => {
  const reports = [
    { title: "Monthly Revenue", value: "$24,000", trend: "+12%" },
    { title: "New Customers", value: 75, trend: "+5%" },
    { title: "Pending Orders", value: 15, trend: "-2%" },
    { title: "Customer Satisfaction", value: "88%", trend: "+3%" },
  ];

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Reports</h3>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <h4 className="text-gray-500 text-sm">{report.title}</h4>
            <p className="text-2xl font-bold mt-1">{report.value}</p>
            <p
              className={`mt-2 font-semibold text-sm ${
                report.trend.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {report.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive List */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h4 className="text-lg font-semibold mb-3">Top Performing Customers</h4>
        <ul className="space-y-2">
          <li className="flex justify-between border-b pb-2 text-sm">
            <span>John Doe</span>
            <span className="font-medium">$5,000</span>
          </li>
          <li className="flex justify-between border-b pb-2 text-sm">
            <span>Emily Davis</span>
            <span className="font-medium">$4,500</span>
          </li>
          <li className="flex justify-between border-b pb-2 text-sm">
            <span>Chris Brown</span>
            <span className="font-medium">$3,200</span>
          </li>
          <li className="flex justify-between text-sm">
            <span>Mike Johnson</span>
            <span className="font-medium">$2,800</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportsPage;

import React from "react";

const ReportsPage = () => {
  const reports = [
    { title: "Monthly Revenue", value: "$24,000", trend: "+12%" },
    { title: "New Customers", value: 75, trend: "+5%" },
    { title: "Pending Orders", value: 15, trend: "-2%" },
    { title: "Customer Satisfaction", value: "88%", trend: "+3%" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Reports</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h4 className="text-gray-500">{report.title}</h4>
            <p className="text-xl font-bold">{report.value}</p>
            <p className={`mt-1 font-semibold ${
              report.trend.startsWith("+") ? "text-green-600" : "text-red-600"
            }`}>
              {report.trend}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Top Performing Customers</h4>
        <ul className="list-disc list-inside">
          <li>John Doe - $5,000</li>
          <li>Emily Davis - $4,500</li>
          <li>Chris Brown - $3,200</li>
          <li>Mike Johnson - $2,800</li>
        </ul>
      </div>
    </div>
  );
};

export default ReportsPage;

import React from "react";

const CustomersPage = () => {
  const customers = [
    { name: "John Doe", email: "john@example.com", phone: "1234567890", company: "TechCorp", country: "USA", status: "Active" },
    { name: "Mike Johnson", email: "mike@example.com", phone: "1112223333", company: "BuildRight", country: "Canada", status: "Active" },
    { name: "Emily Davis", email: "emily@example.com", phone: "2223334444", company: "HealthPlus", country: "Australia", status: "Inactive" },
    { name: "Chris Brown", email: "chris@example.com", phone: "5556667777", company: "MarketHub", country: "Germany", status: "Active" },
    { name: "David Wilson", email: "david@example.com", phone: "7778889999", company: "NextGen", country: "India", status: "Active" },
    { name: "Olivia Taylor", email: "olivia@example.com", phone: "8889990000", company: "EduSmart", country: "USA", status: "Inactive" },
    { name: "Liam Martinez", email: "liam@example.com", phone: "9990001111", company: "SoftTech", country: "Spain", status: "Active" },
    { name: "Mason Garcia", email: "mason@example.com", phone: "4445556666", company: "AgriGrow", country: "Brazil", status: "Active" },
    { name: "Ava Rodriguez", email: "ava@example.com", phone: "5554443333", company: "GreenWorld", country: "Mexico", status: "Inactive" },
    { name: "Ethan Anderson", email: "ethan@example.com", phone: "2221110000", company: "CodeBase", country: "USA", status: "Active" },
    { name: "James Moore", email: "james@example.com", phone: "3434343434", company: "TravelCo", country: "UAE", status: "Active" },
    { name: "Charlotte White", email: "charlotte@example.com", phone: "4545454545", company: "Artify", country: "Netherlands", status: "Inactive" },
    { name: "Benjamin Clark", email: "benjamin@example.com", phone: "5656565656", company: "AutoDrive", country: "Japan", status: "Active" },
    { name: "Lucas Walker", email: "lucas@example.com", phone: "7878787878", company: "FinServe", country: "Sweden", status: "Active" },
    { name: "Harper Hall", email: "harper@example.com", phone: "8989898989", company: "GameOn", country: "South Korea", status: "Inactive" },
  ];

  const filteredCustomers = customers.filter(
    (c) => c.status === "Active" || c.status === "Inactive"
  );

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4">Customers</h3>

      {/* Responsive Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-3 uppercase"> Customer Name</th>
              <th className="text-left p-3 uppercase">Email</th>
              <th className="text-left p-3 uppercase">Phone</th>
              <th className="text-left p-3 uppercase">Company</th>
              <th className="text-left p-3 uppercase">Country</th>
              <th className="text-left p-3 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.company}</td>
                <td className="p-3">{customer.country}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
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

export default CustomersPage;

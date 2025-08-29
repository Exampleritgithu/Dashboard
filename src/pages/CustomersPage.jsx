import React from "react";

const CustomersPage = () => {
  const customers = [
    { name: "John Doe", email: "john@example.com", phone: "1234567890", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", phone: "0987654321", status: "Pending" },
    { name: "Mike Johnson", email: "mike@example.com", phone: "1112223333", status: "Active" },
    { name: "Emily Davis", email: "emily@example.com", phone: "2223334444", status: "Inactive" },
    { name: "Chris Brown", email: "chris@example.com", phone: "5556667777", status: "Active" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Customers</h3>
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
            {customers.map((customer, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className={`p-3 font-semibold ${
                  customer.status === "Active"
                    ? "text-green-600"
                    : customer.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}>
                  {customer.status}
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

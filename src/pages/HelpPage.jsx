import React from "react";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
      <p className="text-gray-700 max-w-2xl text-center mb-6">
        Need assistance? Check out our FAQs or contact our support team. 💡
      </p>

      {/* FAQs */}
      <div className="w-full max-w-3xl space-y-4">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold">❓ How do I add a product?</h2>
          <p className="text-gray-600 mt-2">
            Go to the Products page and click on "Add to Cart" or use the admin panel
            to add new product listings.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold">❓ How can I view my customers?</h2>
          <p className="text-gray-600 mt-2">
            Navigate to the Customers page to see a detailed list of all customers.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold">❓ How do I contact support?</h2>
          <p className="text-gray-600 mt-2">
            Email us at <span className="font-semibold">support@yourapp.com</span> 
            or use the contact form in the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;

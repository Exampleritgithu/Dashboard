import React from "react";

const PromotePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Business</h1>
      <p className="text-gray-700 max-w-2xl text-center">
        Here you can highlight promotions, advertise products, or create
        marketing campaigns. 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">📢 Social Media</h2>
          <p className="text-gray-600">
            Share your products on Facebook, Instagram, and Twitter.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">💌 Email Campaigns</h2>
          <p className="text-gray-600">
            Send offers and updates directly to your customers' inbox.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">⭐ Ads & Promotions</h2>
          <p className="text-gray-600">
            Run special promotions and attract new customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotePage;

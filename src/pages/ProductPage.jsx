import React from "react";

// Product Card Component
const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-64 hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-3">{title}</h2>
      <p className="text-gray-600">Price: ${price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

// Product Page Component
const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: "P1.jpg",
      title: "Product One",
      price: 29.99,
    },
    {
      id: 2,
      image: "P2.jpg",
      title: "Product Two",
      price: 49.99,
    },
    {
      id: 3,
      image: "P3.jpg",
      title: "Product Three",
      price: 19.99,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

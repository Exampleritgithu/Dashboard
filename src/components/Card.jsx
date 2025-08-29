import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center gap-4">
      <div className="text-blue-500 text-3xl">{icon}</div>
      <div>
        <h4 className="text-gray-500">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;

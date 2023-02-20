import React from "react";

const Card = () => {
  return (
    <div className="border hover:border-indigo-500 cursor-pointer h-44 w-44 rounded-xl p-4 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700 flex-none mr-4 mb-4">
      <div className="h-12 w-12 border border-indigo-500 rounded-full  overflow-hidden mb-4">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1636953099671-481a72803051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt=""
        />
      </div>
      <div>
        <h3 className="font-bold">Name of crypto</h3>
        <p className="text-gray-300">$10,487.99</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const CoinPrice = () => {
  return (
    <div className="bg-indigo-900 p-4 rounded-lg w-fit ">
      <div className="mb-12 mt-4">
        <h1 className="text-4xl font-bold mb-2">Bitcoin</h1>
        <h2 className="text-3xl">$24,769.10</h2>
      </div>
      <div className="flex">
        <div className="mr-8">
          <p className="text-slate-400">Today</p>
          <p>+1.2%</p>
        </div>
        <div className="mr-8 border-l pl-4">
          <p className="text-slate-400">7 days</p>
          <p>+4.3%</p>
        </div>
        <div className="mr-8 border-l pl-4">
          <p className="text-slate-400">30 days</p>
          <p>-11.8%</p>
        </div>
      </div>
    </div>
  );
};

export default CoinPrice;

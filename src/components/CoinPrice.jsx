import React from "react";

const CoinPrice = ({ coin }) => {
  return (
    <div className=" bg-indigo-900 p-4 rounded-lg ">
      <div className="flex justify-center items-center gap-2 mb-12 mt-4">
        <div className="w-1/2 h-1/2 bg-white rounded-full">
          <img
            className="w-full h-full object-cover"
            src={coin.image?.large}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold ">{coin.name} </h1>
          <span className="font-light text-xl">
            ({coin.symbol?.toUpperCase()}/USD)
          </span>
          <h2 className="text-3xl">
            $
            {coin.market_data?.current_price
              ? coin.market_data?.current_price.usd.toLocaleString()
              : "N/A"}
          </h2>
        </div>
      </div>
      <div className="flex text-center">
        
      </div>
    </div>
  );
};

export default CoinPrice;

import React from "react";
import CoinPrice from "../components/CoinPrice";
import Trending from "../components/Trending";
import WatchList from "../components/WatchList";

const CoinPage = () => {
  return (
    <div>
      <div className="w-full flex-col lg:flex-row items-center flex mt-8 gap-8 ">
        <CoinPrice />
        <div className="bg-black w-full h-80 rounded-lg">
          <p className="text-center text-xl mt-20">Trend Chart</p>
        </div>
      </div>
      <Trending />
      <WatchList />
    </div>
  );
};

export default CoinPage;

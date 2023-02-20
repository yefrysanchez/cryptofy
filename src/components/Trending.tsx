import React from "react";
import Card from "./Card";

const Trending = () => {
  return (
    <div className="mt-4">
      <div>
        <h2 className="text-6xl font-bold text-center lg:text-left">
          Trending
        </h2>
      </div>
      <div className="flex overflow-x-scroll lg:overflow-visible lg:flex-wrap mt-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Trending;

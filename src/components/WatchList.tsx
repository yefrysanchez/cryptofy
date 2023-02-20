import { useState } from "react";
import Card from "./Card";

const WatchList = () => {

  const [example, setExample] = useState([]);

  return (
    <div className="mt-4">
      <div>
        <h2 className="text-6xl font-bold text-center lg:text-left">Watchlist</h2>
      </div>
      {example.length === 0 ? (
        <div className="my-8 bg-indigo-800 rounded-lg p-4">
          <h3 className="font-bold text-xl">Your watchlist is empty</h3>
          <p>Start building your watchlist clicking the star icon next to the coin.</p>
        </div>
      ) : (
        <div className="flex overflow-x-scroll lg:overflow-visible lg:flex-wrap mt-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      )}
    </div>
  );
};

export default WatchList;

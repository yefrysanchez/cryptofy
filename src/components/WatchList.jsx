import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../context/WatchListContext";
import Remove from "./Remove";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="mt-4">
      <div>
        <h2 className="text-6xl font-bold text-center lg:text-left">
          Watchlist
        </h2>
      </div>
      {watchList.length === 0 ? (
        <div className="my-8 bg-indigo-800 rounded-lg p-4">
          <h3 className="font-bold text-xl">Your watchlist is empty</h3>
          <p>
            Start building your watchlist clicking the star icon next to the
            coin.
          </p>
        </div>
      ) : (
        <div className="flex overflow-x-scroll lg:overflow-visible lg:flex-wrap mt-8">
          {watchList &&
            watchList.map((card) => (
              <div
                key={card.id}
                className="border relative hover:border-indigo-500 cursor-pointer h-44 w-44 rounded-xl p-4 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700 flex-none mr-4 mb-4"
              >
                <Remove coin={card} />
                <Link to={`/coin/${card.id}`}>
                  <div className="h-12 w-12 bg-white border border-indigo-500 rounded-full  overflow-hidden mb-4">
                    <img
                      className="h-full w-full object-cover"
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{card.name}</h3>
                    <span className="font-light">
                      {card.symbol.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p>
                      $
                      {card.price
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;

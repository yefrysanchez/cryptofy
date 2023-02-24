import React, { FunctionComponentElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Watch from "./Watch";


const SearchModal = ({ close, name }) => {
  const [coins, setCoins] = useState();

  useEffect(() => {
    const petition = fetch(
      `https://api.coingecko.com/api/v3/search?query=${name}`
    );
    petition
      .then((res) => res.json())
      .then((e) =>
        setCoins(
          e.coins.map((coin) => (
            <tr
              key={coin.id}
              className="border-b-2 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700"
            >
              <td className="py-4 text-center ">
                <Watch />
              </td>
              <td className="py-4 text-center ">{coin.market_cap_rank}</td>
              <td className="py-4 text-center flex justify-around ">
                <div className="w-6 h-6 rounded-full bg-white overflow-hidden">
                  <img
                    className="h-full w-full object-cover'"
                    src={coin.large}
                    alt=""
                  />
                </div>
                <Link onClick={() => close(false)} to={`/coin/${coin.id}`}>
                  <span className="font-bold bg-indigo-900 p-1 rounded-lg">{coin.name}</span>
                </Link>
                <span className="font-light">{coin.symbol}</span>
              </td>
            </tr>
          ))
        )
      );
  }, []);

  return (
    <section className="absolute duration-500 z-40 flex bg-black bg-opacity-70 flex-col items-center h-full w-full top-0 left-1/2 translate-x-[-50%] ">
      <div className="relative max-h-[400px] md:max-h-[600px] overflow-y-scroll w-3/4 lg:w-1/2 mt-48">
        <button
          onClick={() => close(false)}
          className="absolute top-0 right-0 bg-red-700 px-3 rounded-lg"
        >
          X
        </button>{" "}
        <table className=" bg-indigo-900 w-full rounded-lg px-4 pb-8">
          <thead className="border-b-2">
            <tr className="lg:text-lg">
              <th className="py-4">Watch</th>
              <th>Rank</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{coins}</tbody>
        </table>
      </div>
    </section>
  );
};

export default SearchModal;

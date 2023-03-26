import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiContext } from "../context/ApiContext";
import Watch from "./Watch";

const Card = () => {
  const { btc } = useContext(apiContext);
  const [coins, setCoins] = useState("");
  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const petition = fetch(url);

    petition
      .then((res) => res.json())
      .then((data) =>
        setCoins(
          data.coins.map((e) => (
            <div
              key={e.item.id}
              className="border relative hover:border-indigo-500 cursor-pointer h-44 w-44 rounded-xl p-4 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700 flex-none mr-4 mb-4"
            >
              <div className="absolute right-2">
                <Watch coin={e.item} />
              </div>
              <Link to={`/coin/${e.item.id}`}>
                <div className="h-12 w-12 bg-white border border-indigo-500 rounded-full  overflow-hidden mb-4">
                  <img
                    className="h-full w-full object-cover"
                    src={e.item.small}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-bold">{e.item.name}</h3>
                  <span className="font-light">{e.item.symbol}</span>
                  <p>
                    $
                    {(Number(e.item.price_btc) * btc)
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </Link>
            </div>
          ))
        )
      );
  }, []);

  return <>{coins}</>;
};

export default Card;

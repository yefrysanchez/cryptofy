import { useContext } from "react";
import { Link } from "react-router-dom";
import Watch from "./Watch";
import { apiContext } from "../context/ApiContext";

const TableRow = () => {
  const { coins, btc } = useContext(apiContext);

  return (
    <>
      {coins ? (
        coins.map((coin) => (
          <tr
            key={coin.id}
            className="border-b-2 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700"
          >
            <td className="py-4 text-center">
              <Watch coin={coin} />
            </td>
            <td className="py-4 text-center ">{coin.market_cap_rank}</td>
            <td className="py-4 text-center flex justify-around ">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover'"
                  src={coin.image}
                  alt=""
                />
              </div>
              <Link to={`/coin/${coin.id}`}>
                <span className="font-bold mr-2">{coin.name}</span>
                <span className="font-light">
                  {coin.symbol.toLocaleUpperCase()}
                </span>
              </Link>
            </td>
            <td className="py-4 text-center ">
              $
              {coin.current_price
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td
              className={`py-4 text-center hidden md:table-cell ${
                coin.price_change_percentage_24h < 0
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className="py-4 text-center hidden lg:table-cell">
              $
              {coin.high_24h
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td className="py-4 text-center hidden lg:table-cell">
              $
              {coin.low_24h
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td className="py-4 text-center hidden md:table-cell">
              $
              {coin.market_cap
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
          </tr>
        ))
      ) : (
        <div className="absolute my-8 bg-red-800 rounded-lg p-4">
          <h3 className="font-bold text-xl">API calls limit</h3>
          <p>
            CoinGecko API has a rate limit of 10-30 calls per minute, if you
            exceed that limit you will be blocked until the next 1 minute
            window. Please try again in 1 minute.
          </p>
        </div>
      )}
    </>
  );
};

export default TableRow;

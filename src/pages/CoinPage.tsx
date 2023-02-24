import React, { useEffect, useState } from "react";
import CoinPrice from "../components/CoinPrice";
import WatchList from "../components/WatchList";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import axios from "axios";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const { coinId } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
    });
  }, [url]);

  return (
    <div className="pb-8">
      <WatchList />
      <div className="w-full flex-col lg:flex-row items-center px-4 md:px-0 flex mt-8 gap-8 ">
        <CoinPrice coin={coin} />
        <div className="relative flex items-end justify-center  bg-black w-full h-80 rounded-lg">
          <Sparklines data={coin.market_data?.sparkline_7d.price}>
            <SparklinesLine color="blue" />
            <SparklinesSpots />
          </Sparklines>
          <h2 className="absolute top-2 left-2 font-bold text-3xl">7 Days</h2>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-4xl mb-2">About {coin.name}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;

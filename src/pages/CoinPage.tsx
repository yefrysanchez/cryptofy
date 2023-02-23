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
      <div className="w-full flex-col lg:flex-row items-center flex mt-8 gap-8 ">
        <CoinPrice coin={coin} />
        <div className="flex items-end justify-center bg-black w-full h-80 rounded-lg">
          <Sparklines data={coin.market_data?.sparkline_7d.price}>
            <SparklinesLine color="blue" />
            <SparklinesSpots />
          </Sparklines>
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

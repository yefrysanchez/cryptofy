import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const apiContext = createContext();

export const Data = ({ children }: any) => {
  const [coins, setCoins] = useState();
  const [btc, setBtc] = useState();
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=24h%2C%207d%2C%2030d`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
      setBtc(res.data[0].current_price)
     
    });
  }, [url]);

  const { Provider } = apiContext;
  return <Provider value={{ coins, btc }}>{children}</Provider>;
};

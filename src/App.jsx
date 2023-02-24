import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {

  const [coins, setCoins] = useState()
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true&price_change_percentage=24h%2C%207d%2C%2030d`

  useEffect(()=> {
      axios.get(url).then((res) => {
          setCoins(res.data)
      })
  }, [url])





  return (
    <div className="container mx-auto text-indigo-100">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;

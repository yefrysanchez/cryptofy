import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WatchListContext } from "../context/WatchListContext";

const Watch = ({ coin }) => {
  const { setWatchList, setCoinData } = useContext(WatchListContext);

  const onClick = () => {
    setWatchList((prev) => [
      ...prev,
      {
        id: coin.id,
        name: coin.name,
        img: coin.image,
        symbol: coin.symbol,
        price: coin.current_price,
      },
    ]);
    toast("Coin added to the Watchlist successfully!");
  };

  return (
    <div className="bg-gray-600 p-1 cursor-pointer rounded-lg">
      <button onClick={onClick}>Watch</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Watch;

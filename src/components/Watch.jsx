import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiContext } from "../context/ApiContext";
import { WatchListContext } from "../context/WatchListContext";

const Watch = ({ coin }) => {
  const { btc } = useContext(apiContext);
  const { setWatchList, watchList } = useContext(WatchListContext);
  const customId = "custom-id-yes";
  const onClick = () => {
    if (watchList.find((item) => item.id === coin.id)) {
      toast("Coin already in the Watchlist", {
        toastId: customId,
      });
    } else {
      setWatchList((prev) => [
        ...prev,
        {
          id: coin.id,
          name: coin.name,
          img: coin.image || coin.small,
          symbol: coin.symbol,
          price: coin.current_price || coin.price_btc * Number(btc),
        },
      ]);
      toast("Coin added to the Watchlist successfully!", {
        toastId: customId,
      });
    }
  };

  return (
    <div className="bg-gray-600 p-1 cursor-pointer rounded-lg">
      <button onClick={onClick}>Watch</button>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

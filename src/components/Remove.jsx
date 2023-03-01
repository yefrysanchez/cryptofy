import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { WatchListContext } from "../context/WatchListContext";

const Remove = ({ coin }) => {
  const { watchList, setWatchList } = useContext(WatchListContext);
  const customId = "custom-id-yes";
  const onClick = () => {
    const removeCoin = watchList.filter((card) => card.id !== coin.id);
    setWatchList(removeCoin);
    toast("Coin removed succefully!", {
      toastId: customId,
    });
  };

  return (
    <div
      onClick={onClick}
      className="absolute right-4 bg-red-700 text-white z-50 p-1 cursor-pointer rounded-lg"
    >
      <button>Remove</button>
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

export default Remove;

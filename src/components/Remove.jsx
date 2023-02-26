import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Remove = () => {
  const onClick = () => {
    toast("Still Working on It");
  };

  return (
    <div
      onClick={onClick}
      className="absolute right-4 bg-red-700 text-white z-50 p-1 cursor-pointer rounded-lg"
    >
      <button>Watch</button>
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

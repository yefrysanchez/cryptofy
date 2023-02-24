import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Watch = ({ coin }) => {
  const notify = () => toast("Still working on the Watchlist");

  return (
    <div className="bg-gray-600 p-1 cursor-pointer rounded-lg">
      <button onClick={notify}>Watch</button>
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

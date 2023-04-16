import Banner from "./Banner";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import { useRef, useState } from "react";
import Signin from "./Signin";

const Navbar = () => {
  const [searching, setSearching] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [coin, setCoin] = useState("");
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    setSearching(true);
    setCoin(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-2">
        <div>
          <div className="cursor-pointer hover:opacity-90 duration-200">
            <h1 className="font-bold text-xl bg-indigo-600 text-white w-fit py-2 px-4 rounded-md">
              Cryptofy
            </h1>
          </div>
        </div>

        <div>
          <form onSubmit={onSubmit} className="z-50">
            <input
              ref={inputRef}
              className="placeholder:italic text-black placeholder:text-slate-900 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
              placeholder="Search Crypto"
              type="text"
              name="search"
            />
          </form>

          <div className="flex gap-2">
            {isLogged ? (
              <div className="flex mt-2 items-center gap-2">
                <div className="rounded-full h-8 w-8 overflow-hidden">
                  <img
                    className="w-full h-full  object-cover"
                    src="https://media.istockphoto.com/id/1441927607/vector/man-avatar-icon.jpg?s=612x612&w=0&k=20&c=X0mHlJSSaSrnWl9jQ7fYoR0Sy3feZ_QyxNKDdz9E11w="
                    alt=""
                  />
                </div>
                <h2 className="font-bold">Yefry Sanchez</h2>
                <p className="text-red-400 cursor-pointer hover:underline">
                  Log out
                </p>
              </div>
            ) : (
              <div onClick={() => setShowSignIn(true)} className="bg-indigo-600 mt-2 cursor-pointer hover:bg-indigo-700 duration-200 font-bold text-white flex items-center py-1 px-4 rounded-lg">
                <h2>Sign in</h2>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Banner />

      {searching && <SearchModal close={setSearching} name={coin} />}
      {showSignIn && <Signin close={setShowSignIn} />}
    </header>
  );
};

export default Navbar;

import Banner from "./Banner";
import SearchModal from "./SearchModal";
import { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [searching, setSearching] = useState(false);
  const [coin, setCoin] = useState("");
  const inputRef = useRef();
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0()

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
            {isAuthenticated ? (
              <div className="flex mt-2 items-center gap-2">
                <div className="rounded-full h-8 w-8 overflow-hidden">
                  <img
                    className="w-full h-full  object-cover"
                    src={user.picture}
                    alt={`${user.name}'s picture`}
                  />
                </div>
                <h2 className="font-bold">{user.name}</h2>
                <p onClick={() => logout({returnTo: window.location.origin})} className="text-red-400 cursor-pointer hover:underline">
                  Log out
                </p>
              </div>
            ) : (
              <div onClick={() => loginWithRedirect()} className="bg-indigo-600 mt-2 cursor-pointer hover:bg-indigo-700 duration-200 font-bold text-white flex items-center py-1 px-4 rounded-lg">
                <h2>Log in</h2>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Banner />

      {searching && <SearchModal close={setSearching} name={coin} />}
    </header>
  );
};

export default Navbar;

import Banner from "./Banner";


const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <div className="cursor-pointer hover:opacity-90 duration-200">
          <h1 className="font-bold text-xl bg-indigo-600 text-white w-fit py-2 px-4 rounded-md">
            Cryptofy
          </h1>
        </div>
        <div>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search Crypto"
              type="text"
              name="search"
            />
          </label>
        </div>
      </nav>
      <Banner />
    </header>
  );
};

export default Navbar;

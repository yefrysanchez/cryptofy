import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const Context = ({ children }) => {
  const [watchList, setWatchList] = useState(() => localData());

  function localData() {
    const data = localStorage.getItem("Watchlist");
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    localStorage.setItem("Watchlist", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const Context = ({ children }) => {
  const [watchList, setWatchList] = useState([]);


  
  useEffect(() => {
    const data = window.localStorage.getItem("watchList")
    if(data){
      setWatchList(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

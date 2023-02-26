import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const Context = ({ children }) => {
  const [watchList, setWatchList] = useState([]);


  // tried to implement localstorage but not worked 
  // for some reason
  
  // useEffect(() => {
  //   const data = window.localStorage.getItem("watchList")
  //   if(data.length !== 0) setWatchList(JSON.parse(data))
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("watchList", JSON.stringify(watchList));
  // }, [watchList]);

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

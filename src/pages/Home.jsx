import CoinTable from "../components/CoinTable";
import Trending from "../components/Trending";
import WatchList from "../components/WatchList";
import { Context } from "../context/WatchListContext";

const Home = () => {
  return (
    <>
      <Context>
        <Trending />
        <WatchList />
        <CoinTable />
      </Context>
    </>
  );
};

export default Home;

import CoinTable from "../components/CoinTable";
import Trending from "../components/Trending";
import WatchList from "../components/WatchList";

const Home = () => {
  return (
    <>
      <Trending />
      <WatchList />
      <CoinTable />
    </>
  );
};

export default Home;

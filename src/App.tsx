import "./App.css";
import CoinTable from "./components/CoinTable";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import WatchList from "./components/WatchList";

function App() {

  return (
    <div className="container mx-auto text-indigo-100">
      <Navbar />
      <Trending />
      <WatchList />
      <CoinTable />
    </div>
  );
}

export default App;

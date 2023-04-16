
import "./App.css";
import Navbar from "./components/Navbar";
import { Context } from "./context/WatchListContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="container mx-auto text-indigo-100">
      <Context>
        <Navbar />
      </Context>
      <AppRouter />
    </div>
  );
}

export default App;

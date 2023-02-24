import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="container mx-auto text-indigo-100">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;

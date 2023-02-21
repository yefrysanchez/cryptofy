import { Route, Routes } from "react-router-dom";
import CoinPage from "../pages/CoinPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:coin" element={<CoinPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

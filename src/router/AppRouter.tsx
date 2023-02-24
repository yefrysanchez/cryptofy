import { Route, Routes } from "react-router-dom";
import { Data } from "../context/ApiContext";
import CoinPage from "../pages/CoinPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Data>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
        <Route path="/account"  />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Data>
  );
};

export default AppRouter;

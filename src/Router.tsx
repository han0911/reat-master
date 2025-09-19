import { createBrowserRouter } from "react-router-dom";
import Coin from "./components/Coin";
import Coins from "./components/Coins";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
  },
  {
    path: "/detail/:coinid",
    element: <Coin />,
  },
]);
export default Router;

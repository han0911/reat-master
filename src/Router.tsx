// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Ani from "./components/ani";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Ani />,
  },
]);

export default router;

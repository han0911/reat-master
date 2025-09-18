import { createBrowserRouter } from "react-router-dom";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/", // 주소
    element: <App />, // 보여줄 컴포넌트
  },
]);
export default router;
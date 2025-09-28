// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import DragDrop from "./components/DragDrop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DragDrop />,
  },
]);

export default router;

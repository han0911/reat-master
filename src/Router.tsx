import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Not from "./components/Not";
import About from "./screen/about";
import Home from "./screen/home";
import User from "./components/user";
import Followers from "./Follower";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/:userid",
        element:<User/>,
        children:[{
            path:'followers',
            element:<Followers/>
        }]
      },
      {
        path:'users',
        children:[
            {
                path:"userid",
                element:<User/>
            }
        ]
      }
    ],
    errorElement: <Not />,
  },
]);

export default router;

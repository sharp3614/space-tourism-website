import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import App from "../App";
import Destination from "../pages/destination";
import Crew from "../pages/crew";
import Technology from "../pages/technology";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

export default routes;

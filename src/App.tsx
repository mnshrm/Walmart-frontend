import "./App.css";
import Cart from "./Scenes/Cart/Cart";
import CheckOut from "./Scenes/CheckOut/CheckOut";
import Error from "./Scenes/Error/Error";
import Home from "./Scenes/Home/Home";
import RootLayout from "./Scenes/Root/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        children: [
          {
            index: true,
            element: <Cart />,
          },
          {
            path: "/cart/checkout",
            element: <CheckOut />,
          },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

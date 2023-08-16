import Cart from "./Scenes/Cart/Cart";
import CheckOut from "./Scenes/CheckOut/CheckOut";
import Error from "./Scenes/Error/Error";
import Home, { loader as homeLoader } from "./Scenes/Home/Home";
import RootLayout from "./Scenes/Root/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

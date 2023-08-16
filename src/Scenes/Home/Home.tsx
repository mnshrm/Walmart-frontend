import ProductList from "../../Components/ProductList";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import store, { RootState } from "../../Store";
import Filter from "./Filter";
import { Product } from "../../Models/products";
import { LoaderFunction } from "react-router-dom";
import { productListActions } from "../../Store/productSlice";
import { loadingActions } from "../../Store/loading-slice";

/**
 * Home component is one in which all products are listed
 * We have a search bar, where user can search for an item.
 * All the products are listed with their name and price
 * and add to cart and remove from cart button.
 */

const Home: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.productList.products
  );

  return (
    <Box sx={{ padding: "10px" }}>
      <Filter />
      <ProductList products={products} />
    </Box>
  );
};

export default Home;

export const loader: LoaderFunction = async () => {
  const category = store.getState().productList.category;
  const sendRequest = async () => {
    const result = await fetch(`http://192.168.1.10:5000/products/${category}`);
    const data = await result.json();
    return data.data;
  };
  try {
    store.dispatch(loadingActions.setLoading(true));
    const data: Product[] = await sendRequest();
    console.log(data);
    store.dispatch(productListActions.updateProducts(data));
    store.dispatch(loadingActions.setLoading(false));
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }

  return {};
};

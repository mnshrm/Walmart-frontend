import ProductList from "../../Components/ProductList";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import Filter from "./Filter";

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

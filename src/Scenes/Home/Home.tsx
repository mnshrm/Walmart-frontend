import { Product } from "../../Models/products";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar/SearchBar";
import { Box } from "@mui/material";

const products: Product[] = [
  {
    "Product Name": "Dark Fantasy - Choco Fills Biscuits - Cookies",
    Category: "Snacks & Branded Foods",
    market_price: 33,
    type: "Chips & Corn Snacks",
  },
  {
    "Product Name": "5 Star Oreo Chocolate Bar",
    Category: "Snacks & Branded Foods",
    market_price: 35,
    type: "Chocolates",
  },
  {
    "Product Name": "I Love You Fruit N Nut Chocolate",
    Category: "Snacks & Branded Foods",
    market_price: 100,
    type: "Chocolates",
  },
  {
    "Product Name": "Munch Chocolate Coated Crunchy Wafer - Share Pack",
    Category: "Snacks & Branded Foods",
    market_price: 100,
    type: "Chocolates",
  },
  {
    "Product Name": "Perk - Chocolate, Home Treats, 175.5 g, 27 Units",
    Category: "Snacks & Branded Foods",
    market_price: 198,
    type: "Chocolates",
  },
  {
    "Product Name": "Kisses - Almonds Chocolate",
    Category: "Snacks & Branded Foods",
    market_price: 140,
    type: "Chocolates",
  },
  {
    "Product Name": "Dark Chocolate",
    Category: "Snacks & Branded Foods",
    market_price: 25,
    type: "Chocolates",
  },
  {
    "Product Name": "Cuppa Noodles - Masala",
    Category: "Snacks & Branded Foods",
    market_price: 45,
    type: "Cup Noodles",
  },
  {
    "Product Name": "Cuppa Noodles - Chilli Chow",
    Category: "Snacks & Branded Foods",
    market_price: 45,
    type: "Cup Noodles",
  },
];

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <SearchBar products={products} />
      <ProductList products={products} />
    </Box>
  );
};

export default Home;

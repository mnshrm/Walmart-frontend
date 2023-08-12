import React from "react";
import ProductList from "../../Components/ProductList";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.items);
  const totalItems = useSelector(
    (state: RootState) => state.cart.numberOfProducts
  );
  const bill = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <Box sx={{ padding: "10px" }}>
      <Card
        sx={{
          border: "1px solid lightGreen",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Total Amount : {bill}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "lightgray",
            }}
          >
            Quantity: {totalItems}
          </Typography>
        </CardContent>
      </Card>
      <ProductList products={products} />
    </Box>
  );
};

export default Cart;

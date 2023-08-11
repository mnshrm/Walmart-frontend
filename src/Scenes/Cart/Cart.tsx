import React from "react";
import ProductList from "../../Components/ProductList";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state);

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
            Total Amount : {cart.totalPrice}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "lightgray",
            }}
          >
            Quantity: {cart.numberOfProducts}
          </Typography>
        </CardContent>
      </Card>
      <ProductList products={cart.items} />
    </Box>
  );
};

export default Cart;

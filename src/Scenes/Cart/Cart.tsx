import React from "react";
import ProductList from "../../Components/ProductList";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";
import { Payment } from "@mui/icons-material";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const products = useSelector((state: RootState) => state.cart.items);
  console.log(products);
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
          <Button
            color="success"
            variant="contained"
            sx={{ marginTop: "10px" }}
            startIcon={<Payment />}
            onClick={() => {
              navigate("/cart/checkout");
            }}
            disabled={totalItems === 0}
          >
            Pay now
          </Button>
        </CardContent>
      </Card>
      <ProductList products={products} />
    </Box>
  );
};

export default Cart;

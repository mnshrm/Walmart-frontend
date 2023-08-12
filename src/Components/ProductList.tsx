import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  ButtonGroup,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import { Product } from "../Models/products";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../Store";
import { cartActions } from "../Store/cartSlice";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const [page, setPage] = useState<number>(1); // State for current page
  const dispatch: AppDispatch = useDispatch(); // Dispatch function to update Cart state
  const category = useSelector(
    (state: RootState) => state.productList.category
  );

  /**
   * page state determines the current state
   * page range from 1 to total number of products divided by 5
   * handleChange updates the value of page state
   */
  products = products.filter((prd) => prd.Category === category);
  const count = Math.ceil(products.length / 5);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  /**
   * Following functions are to update cart state
   */
  const addToCart: (item: Product) => void = (item) => {
    dispatch(cartActions.addItem(item));
  };
  const removeFromCart: (item: string) => void = (item) => {
    dispatch(cartActions.removeItem(item));
  };
  return (
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        {products.slice(5 * (page - 1), 5 * page).map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} key={product["Product Name"]}>
            <Card sx={{ boxShadow: "none" }}>
              <CardContent>
                <Typography variant="h6">
                  {product["Product Name"].substring(0, 30) + "..."}
                </Typography>
                <Typography variant="subtitle1">
                  Rs {product.market_price.toFixed(2)}{" "}
                  {product.quantity !== undefined
                    ? `x ${product.quantity}`
                    : ""}
                </Typography>
                <Box display="flex" justifyContent="flex-end">
                  <ButtonGroup sx={{ marginLeft: "auto" }} size="small">
                    <Button
                      onClick={addToCart.bind(null, product)}
                      color="primary"
                    >
                      Add
                    </Button>
                    <Button
                      onClick={removeFromCart.bind(
                        null,
                        product["Product Name"]
                      )}
                      color="secondary"
                    >
                      Remove
                    </Button>
                  </ButtonGroup>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        <Pagination
          sx={{ margin: "auto" }}
          variant={"outlined"}
          shape={"rounded"}
          page={page}
          count={count}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ProductList;

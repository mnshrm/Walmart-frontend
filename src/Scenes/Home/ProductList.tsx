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
import { Product } from "../../Models/products";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const count = Math.ceil(products.length / 5);

  const [page, setPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        {products.slice(5 * (page - 1), 5 * page).map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product["Product Name"]}>
            <Card sx={{ boxShadow: "none" }}>
              <CardContent>
                <Typography variant="h6">
                  {product["Product Name"].substring(0, 30) + "..."}
                </Typography>
                <Typography variant="subtitle1">
                  Rs {product.market_price.toFixed(2)}
                </Typography>
                <Box display="flex" justifyContent="flex-end">
                  <ButtonGroup sx={{ marginLeft: "auto" }} size="small">
                    <Button color="primary">Add</Button>
                    <Button color="secondary">Remove</Button>
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
        />
      </Box>
    </Box>
  );
};

export default ProductList;

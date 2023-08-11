import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Badge,
} from "@mui/material";
import { Menu, ShoppingCart } from "@mui/icons-material";
import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * App Bar component which has a heading and a button to toggle MUI drawer
 */

const Appbar: React.FC<{ onClick: () => void }> = (props) => {
  const navigation: NavigateFunction = useNavigate();

  const goToCart: () => void = () => {
    navigation("/cart");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: "9vh" }}>
          {/* SIDEBAR toggle button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={props.onClick}
          >
            <Menu />
          </IconButton>
          {/* Heading */}

          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Walmart
            </Typography>
          </Box>

          {/* Cart button with badge */}
          <IconButton
            size="large"
            color="inherit"
            sx={{
              marginLeft: "auto",
            }}
            onClick={goToCart}
          >
            <Badge badgeContent={2} color="success">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;

import React, { useState } from "react";
import {
  TextField,
  List,
  ListItemText,
  Popper,
  Paper,
  ClickAwayListener,
  ListItemButton,
} from "@mui/material";
import { Product } from "../../../Models/products";

interface SearchBarProps {
  products: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    updateSearchResults(newSearchTerm);
    setAnchorEl(event.currentTarget);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = products.filter((product) =>
      product["Product Name"].toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <TextField
        sx={{ backgroundColor: "white", borderRadius: "4px" }}
        label="Search Products"
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
            <List>
              {searchResults.map((product) => (
                <ListItemButton key={product["Product Name"]}>
                  <ListItemText primary={product["Product Name"]} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default SearchBar;

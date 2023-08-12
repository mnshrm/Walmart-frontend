import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "../../Store";
import {
  productListActions,
  updateProductList,
} from "../../Store/productSlice";
import { Product } from "../../Models/products";

const Filter: React.FC = (props) => {
  const category = useSelector(
    (state: RootState) => state.productList.category
  );

  const categories = useSelector(
    (state: RootState) => state.productList.categories
  );

  const dispatch: AppDispatch = useDispatch();

  const categoryUpdateHandler: (event: SelectChangeEvent<string>) => void = (
    event
  ) => {
    // dispatch(updateProductList(category));
    dispatch(productListActions.changeCategory(event.target.value));
  };

  return (
    <>
      <InputLabel id="category-selector">
        <Typography variant="h6">Category</Typography>
      </InputLabel>
      <Select
        fullWidth
        id="category-selector-select"
        placeholder="Category"
        onChange={categoryUpdateHandler}
        value={category}
        sx={{
          backgroundColor: "white",
        }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Filter;

export const loader: () => void = async () => {
  const category = store.getState().productList.category;
  const sendRequest = async () => {
    const result = await fetch(`/products/${category}`);
    const data = await result.json();
    return data;
  };
  try {
    const data: Product[] = await sendRequest();
    store.dispatch(productListActions.updateProducts(data));
  } catch (err) {
    console.log(err);
  }
};

import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { updateProductList } from "../../Store/productSlice";
import { loadingActions } from "../../Store/loading-slice";

const Filter: React.FC = () => {
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
    dispatch(loadingActions.setLoading(true));
    dispatch(updateProductList(event.target.value));
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

import {
  Alert,
  Box,
  AlertTitle,
  Collapse,
  LinearProgress,
  Button,
} from "@mui/material";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { offerActions } from "../../Store/offerSlice";
import { cartActions } from "../../Store/cartSlice";

/**
 * This is the root container of project.
 * Any child component will be pushed into this component through <Outlet />
 * by react-router-dom.
 *
 * ! NOTE - only <Header /> is rerendered when, we toggle SIDEBAR.
 *
 * @returns Root Layout with dynamic content of our app
 */

const RootLayout: React.FC = () => {
  const loading = useSelector((state: RootState) => state.loading.isLoading);
  const { isOffer, offer } = useSelector((state: RootState) => state.offer);
  const dispatch: AppDispatch = useDispatch();
  const applyOfferHandler = () => {
    dispatch(cartActions.addMultiple(offer));
    dispatch(offerActions.removeOffer());
  };
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#ededed" }}>
      <Header />
      {loading && <LinearProgress color="success" />}
      {isOffer && (
        <Collapse in={isOffer}>
          <Alert
            sx={{
              margin: "10px",
              backgroundColor: "rgb(79, 242, 97,1)",
              color: "white",
              position: "relative",
            }}
            variant="outlined"
            onClose={() => {
              dispatch(offerActions.removeOffer());
            }}
            severity="success"
          >
            <AlertTitle>{`${offer.discount}% OFF on purchase of ${
              offer.quantity
            } ${offer.product!.product}`}</AlertTitle>
            <Button onClick={applyOfferHandler} variant="contained">
              Apply
            </Button>
          </Alert>
        </Collapse>
      )}
      {!loading && <Outlet />}
    </Box>
  );
};

export default RootLayout;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
  Stack,
} from "@mui/material";
import { cartActions } from "../../Store/cartSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

interface BankDetails {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CheckOut: React.FC = () => {
  const navigation: NavigateFunction = useNavigate();
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentDone, setPaymentDone] = useState(false);
  const [errors, setErrors] = useState<Partial<BankDetails>>({});
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<BankDetails> = {};

    if (!bankDetails.name) {
      newErrors.name = "Name is required";
    }
    if (!bankDetails.cardNumber) {
      newErrors.cardNumber = "Card number is required";
    }
    if (!bankDetails.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
    }
    if (!bankDetails.cvv) {
      newErrors.cvv = "CVV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayClick = () => {
    const isValid = validateForm();
    if (isValid) {
      setPaymentDone(true);
      dispatch(cartActions.emptyCart());
    }
    return isValid;
  };

  return (
    <Card sx={{ margin: "10px" }}>
      <CardContent>
        <Typography variant="h6">Bank Payment Details</Typography>
        {paymentDone ? (
          <Alert severity="success">Payment is done!</Alert>
        ) : (
          <form>
            <Stack
              sx={{
                margin: "10px 0",
              }}
              spacing={2}
            >
              <TextField
                label="Name"
                name="name"
                value={bankDetails.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
              />
              <TextField
                label="Card Number"
                name="cardNumber"
                value={bankDetails.cardNumber}
                onChange={handleInputChange}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
                fullWidth
                inputProps={{ inputMode: "numeric", minLength: 10 }}
              />
              <TextField
                type="date"
                name="expiryDate"
                value={bankDetails.expiryDate}
                onChange={handleInputChange}
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
                fullWidth
              />
              <TextField
                label="CVV"
                name="cvv"
                value={bankDetails.cvv}
                onChange={handleInputChange}
                error={!!errors.cvv}
                helperText={errors.cvv}
                fullWidth
                inputProps={{ inputMode: "numeric", maxLength: 3 }}
              />
            </Stack>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (handlePayClick())
                  setTimeout(() => {
                    navigation("/");
                  }, 1000);
              }}
            >
              Pay
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default CheckOut;

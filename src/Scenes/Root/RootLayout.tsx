import { useState } from "react";
import { Alert, Box, AlertTitle, Collapse } from "@mui/material";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

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
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#ededed" }}>
      <Header />
      <Collapse in={open}>
        <Alert
          sx={{
            margin: "10px",
            backgroundColor: "rgb(79, 242, 98,0.9)",
            position: "relative",
          }}
          variant="filled"
          onClose={() => {
            setOpen(false);
          }}
          severity="success"
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Collapse>
      <Outlet />
    </Box>
  );
};

export default RootLayout;

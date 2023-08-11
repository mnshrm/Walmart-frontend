// import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
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
  return (
    <Box sx={{ backgroundColor: "#E3E6E6" }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default RootLayout;

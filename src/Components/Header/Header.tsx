import React, { useState } from "react";
import Appbar from "./AppBar";
import AppDrawer from "./AppDrawer";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>();

  const toggleDrawer = () => {
    setOpen((pv) => !pv);
  };

  return (
    <>
      <Appbar onClick={toggleDrawer} />
      <AppDrawer toggleOpen={toggleDrawer} open={open!} />
    </>
  );
};

export default Header;

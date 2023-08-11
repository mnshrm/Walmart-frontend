import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Divider,
} from "@mui/material";

import { Logout, ChevronLeft } from "@mui/icons-material";

type prop = {
  open: boolean;
  toggleOpen: () => void;
};

const AppDrawer: React.FC<prop> = (props) => {
  return (
    <Drawer variant="persistent" anchor="left" open={props.open}>
      {/* Drawer closing button */}
      <Box
        display="flex"
        justifyContent={"flex-end"}
        padding={"5px"}
        sx={{
          width: "250px",
        }}
      >
        <IconButton size="large" onClick={props.toggleOpen}>
          <ChevronLeft sx={{ color: "black" }} />
        </IconButton>
      </Box>

      {/* List items and log out button GRID starts*/}

      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* User options start */}
        <Box></Box>
        {/* User options end */}

        {/* Log Out button start */}

        <Box
          sx={{
            alignSelf: "flex-end",
            width: "100%",
          }}
        >
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </List>
        </Box>

        {/* Log Out button end */}
      </Box>
      {/* List items and log out button GRID ends*/}
    </Drawer>
  );
};

export default AppDrawer;

import React from "react";
import { CiSettings } from "react-icons/ci";
import { Container, Drawer, IconButton, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import "./MenuSettings.css";
import MenuList from "../menu-list/MenuList";

const MenuSettigns: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Container>
      <IconButton onClick={toggleDrawer(true)}>
        <CiSettings className="menu-settings-button-icon" />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        classes={{ paper: "menu-drawer-paper" }}
      >
        <Typography align="center" className="manu-app-title" gutterBottom>
          <FormattedMessage id="app.title" />
        </Typography>
        <MenuList toggleDrawer={toggleDrawer(false)}/>
      </Drawer>
    </Container>
  );
};

export default MenuSettigns;

import React from "react";
import { CiSettings } from "react-icons/ci";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { createMenuList } from "./MenuList";
import "./MenuSettings.css";

const MenuSettigns: React.FC = () => {
  const intl = useIntl();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuList = createMenuList(intl);

  const MenuList = (
    <Box
      className="menu-list-container"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton className="menu-item-button">
              <ListItemIcon className="menu-item-icon">
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} className="menu-item-text" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        {MenuList}
      </Drawer>
    </Container>
  );
};

export default MenuSettigns;

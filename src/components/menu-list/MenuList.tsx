import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useIntl } from "react-intl";
import { IMenuItem } from "../../domain/interfaces/entities/IMenuItem";
import { IMenuListProps } from "../../domain/interfaces/properties/IMenuListProps";
import MenuListFactory from "./MenuListFactory";
import { useAuth } from "../../context/AuthContext";

const MenuList: React.FC<IMenuListProps> = ({ toggleDrawer }) => {
  const intl = useIntl();
  const menuListFactory = new MenuListFactory(intl, useAuth());
  const menuItems: IMenuItem[] = menuListFactory.createMenuList();

  return (
    <Box
      className="menu-list-container"
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton className="menu-item-button" onClick={item.onClick}>
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
};

export default MenuList;

import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch
} from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
           <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;

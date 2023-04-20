import { Laptop, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import { width } from "@mui/system";
import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    // if smalleer than this breakpoint it will display none
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HAYLEY DEV
        </Typography>
        <Laptop sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/2524375/pexels-photo-2524375.jpeg?auto=compresscs=tinysrgbw=1260h=750dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/2524375/pexels-photo-2524375.jpeg?auto=compresscs=tinysrgbw=1260h=750dpr=2"
          />
          <Typography variant="span">Hayley</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <MenuItem> Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;

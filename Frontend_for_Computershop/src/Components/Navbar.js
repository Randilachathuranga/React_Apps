import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import ContactPageSharpIcon from "@mui/icons-material/ContactPageSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLightmode, toggleTheme }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:442px)");

  const theme = createTheme({
    palette: {
      mode: isLightmode ? "light" : "dark",
    },
  });

  const handleMenu = () => {
    setMenu(!menu);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMenu(false);
  };

  const StyledButton = styled(Button)({
    marginLeft: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    height: "fit-content",
    border: 0,
    color: isLightmode ? "black" : "white",
    fontWeight: "bold",
    boxShadow: "none",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundImage: isLightmode
        ? "linear-gradient(to bottom, #1E90FF, #1E90FF)"
        : "linear-gradient(to bottom, #003eff, #006eff)",
      color: isLightmode ? "black" : "white",
    },
  });

  const MenuIconButton = styled(IconButton)({
    color: isLightmode ? "black " : "white",
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isLightmode ? "#ADD8E6" : "black",
          fontFamily: "cursive",
        }}
      >
        <Toolbar>
          <MenuIconButton
            edge="start"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </MenuIconButton>
          <div style={{ display: isMobile ? "none" : "flex", flexGrow: 1 }}>
            <StyledButton onClick={() => navigateTo("/")}>Home</StyledButton>
            <StyledButton onClick={() => navigateTo("/about")}>
              About
            </StyledButton>
            <StyledButton onClick={() => navigateTo("/contact")}>
              Contact Us
            </StyledButton>
          </div>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: isLightmode ? "black" : "white",
              marginRight: "1rem",
              fontFamily: "cursive",
            }}
          >
            RC_Computers
          </Typography>
          <Button
            onClick={toggleTheme}
            variant="contained"
            sx={{
              backgroundColor: isLightmode ? "#ADD8E6" : "black",
              color: isLightmode ? "black" : "white",
              "&:hover": {
                backgroundColor: isLightmode ? "#87CEFA" : "black",
              },
            }}
          >
            {isLightmode ? (
              <NightlightRoundSharpIcon />
            ) : (
              <LightModeSharpIcon />
            )}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={menu}
        onClose={handleMenu}
        sx={{
          backgroundColor: "transparent",
          "& .MuiDrawer-paper": {
            backgroundColor: isLightmode ? "#ADD8E6" : "black",
          },
        }}
      >
        <List
          sx={{
            fontFamily: "cursive",
          }}
        >
          <ListItemButton onClick={() => navigateTo("/")}>
            <ListItemText primary="Home" />
            <HomeSharpIcon />
          </ListItemButton>
          <ListItemButton onClick={() => navigateTo("/about")}>
            <ListItemText primary="About" />
            <InfoSharpIcon />
          </ListItemButton>
          <ListItemButton onClick={() => navigateTo("/contact")}>
            <ListItemText primary="Contact" />
            <ContactPageSharpIcon />
          </ListItemButton>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;

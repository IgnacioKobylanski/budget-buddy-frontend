import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import logo from "../../assets/budgetbuddy-logo-2.png";

const navItems = ["Dashboard", "Users", "Categories", "Transactions"];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", px: 2, pt: 4 }}>
      <img
        src={logo}
        alt="Budget Buddy"
        style={{ height: 40, width: "auto", marginBottom: 16 }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    color: "var(--main-white)",
                    fontFamily: "'Inter', sans-serif",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="static"
        sx={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', sans-serif" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Botón hamburguesa en móvil */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo en mobile */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <img src={logo} alt="Budget Buddy" style={{ height: 40, width: "auto" }} />
          </Box>

          {/* Logo y título en desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="Budget Buddy"
              style={{ height: 40, width: "auto", marginRight: 8 }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              Budget Buddy
            </Typography>
          </Box>

          {/* Botones de navegación en desktop */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "var(--main-white)", fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer hamburguesa en móvil */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

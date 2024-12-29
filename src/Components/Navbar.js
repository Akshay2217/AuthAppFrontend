import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, Divider } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/AuthSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("User logged out successfully");
    navigate('/login'); // Redirect to login page after logout
    setMobileOpen(false); // Close drawer after logout
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const authenticatedLinks = (
    <>
      <Link
        to="/"
        onClick={handleDrawerToggle} // Close drawer when link is clicked
        style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '10px' }}
      >
        Products
      </Link>
      <Link
        to="/home"
        onClick={handleDrawerToggle} // Close drawer when link is clicked
        style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '10px' }}
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={handleDrawerToggle}
        style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '10px' }}
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={handleDrawerToggle}
        style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '10px' }}
      >
        Contact
      </Link>
      <button
        onClick={handleLogout}
        style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'red',
          border: 'none',
          padding: '10px',
          marginTop: '10px',
          cursor: 'pointer',
          display: 'block',
        }}
      >
        Logout
      </button>
    </>
  );

  const unauthenticatedLinks = (
    <>
      <Link
        to="/login"
        onClick={handleDrawerToggle}
        style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '10px' }}
      >
        Login
      </Link>
      <Link
        to="/register"
        onClick={handleDrawerToggle}
        style={{ textDecoration: 'none', color: 'white', display: 'block', padding: '10px' }}
      >
        Register
      </Link>
    </>
  );

  const drawerContent = (
    <div>
      <Typography variant="h5" sx={{ alignSelf: 'center', fontWeight: 700, color: 'greenyellow', marginBottom: '20px' }}>
        Navbar
      </Typography>
      <Divider />
      {isAuthenticated ? authenticatedLinks : unauthenticatedLinks}
    </div>
  );

  const renderMobileNav = () => (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          style: {
            width: '50%',
            maxWidth: '100%',
            backgroundColor: 'black',
            alignItems: 'center',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );

  const renderDesktopNav = () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        {isAuthenticated ? (
          <>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: 10, fontWeight: 700 }}>
              Products
            </Link>
            <Link to="/home" style={{ textDecoration: 'none', color: 'white', marginRight: 10, fontWeight: 700 }}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginRight: 10, fontWeight: 700 }}>
              About
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white', marginRight: 10, fontWeight: 700 }}>
              Contact
            </Link>
            <button
              onClick={handleLogout}
              style={{
                textDecoration: 'none',
                color: 'white',
                backgroundColor: 'red',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white', marginRight: 10, fontWeight: 700 }}>
              Login
            </Link>
            <Link to="/register" style={{ textDecoration: 'none', color: 'white', marginRight: 10, fontWeight: 700 }}>
              Register
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );

  return <div>{isMobile ? renderMobileNav() : renderDesktopNav()}</div>;
};

export default Navbar;

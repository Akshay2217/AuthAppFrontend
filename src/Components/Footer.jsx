import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{padding:"30px"}}>
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
        <Typography variant="body1" color="inherit">
          <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;


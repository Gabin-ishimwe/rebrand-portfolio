import React, { useState } from 'react';
import {
  Button,
  TextField,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Stack,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import theme from '../theme/theme';
import logo from '../assets/logo.svg';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const useStyles = makeStyles(({ theme }) => ({
  linkHover: {
    '&:hover': {
      color: '#ff4a57',
    },
  },
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '18px',
  textDecoration: 'none',
  fontWeight: '500',
}));

const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const styles = useStyles();
  const pages = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'skills' },
    { name: 'Contact', to: 'skills' },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((link, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <Link to={link.to} style={{ textDecoration: 'none' }}>
                <NavLink className={styles.linkHover}>
                  {/* <ListItemText primary={link.name} /> */}
                  {link.name}
                </NavLink>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <AppBar color="secondary">
        <Box
          sx={{
            padding: {
              xs: '10px 20px',
              md: '10px 80px',
            },
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" />
            </Box>
            <Stack
              direction={'row'}
              spacing={5}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              {pages.map((link, index) => (
                <Link
                  to={link.to}
                  style={{ textDecoration: 'none' }}
                  key={index}
                >
                  <NavLink className={styles.linkHover}>{link.name}</NavLink>
                </Link>
              ))}
            </Stack>
            <IconButton
              size={'large'}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon sx={{ color: 'white', fontSize: '36px' }} />
            </IconButton>
            {/* <IconButton size={'large'}>
              <DarkModeIcon
                sx={{
                  color: 'white',
                }}
              />
            </IconButton> */}
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        // PaperProps={{
        //   sx: {
        //     backgroundColor: 'pink',
        //     color: 'red',
        //   },
        // }}
      >
        {list('right')}
      </Drawer>
    </React.Fragment>
  );
};

export default Header;

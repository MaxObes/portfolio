import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logofinal.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#work' },
  { label: 'Contact', href: '#foot' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setNavOpen(open);
  };

  const navList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ label, href }) => (
          <ListItem button component="a" href={href} key={href}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box component="img" src={logo} alt="Maxwell Oberbrunner" sx={{ height: 40 }} />
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={navOpen} onClose={toggleDrawer(false)}>
                {navList}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map(({ label, href }) => (
                <ListItem
                  key={href}
                  component="a"
                  href={href}
                  sx={{ color: '#fff', textDecoration: 'none' }}
                >
                  <ListItemText primary={label} />
                </ListItem>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
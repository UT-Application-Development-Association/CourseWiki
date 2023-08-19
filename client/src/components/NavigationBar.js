import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['Home', 'About', 'Archive', 'Editor'];

export default function NavigationBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: '#fff',
          boxShadow: 0,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 920,
            alignSelf: 'center',
            width: '90%',
          }}
        >
          <Typography
            variant='h5'
            component='div'
            sx={{
              color: '#000', flexGrow: 1,
              fontSize: 28, fontWeight: 'bolder',
            }}
          >
            Course Wiki
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {navItems.map((item) => (
              <Button key={item}
                sx={{
                  color: '#000', fontSize: 20,
                  textTransform: 'none',
                }}
                onClick={() => {
                  navigate(`/${item.toLowerCase()}`);
                }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color='#000'
            aria-label='open drawer'
            edge='start'
            onClick={(event) => {
              handleMenuToggle();
              setAnchorEl(event.currentTarget);
            }}
            sx={{display: {sm: 'none'}}}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={mobileOpen}
            anchorEl={anchorEl}
            onClose={() => {
              handleMenuToggle();
              setAnchorEl(null);
            }}
          >
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  handleMenuToggle();
                  setAnchorEl(null);
                  navigate(`/${item.toLowerCase()}`);
                }}
              >{item}</MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component='main' sx={{p: 3, width: '100%'}}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

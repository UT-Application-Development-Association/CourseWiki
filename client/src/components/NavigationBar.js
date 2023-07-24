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
          minHeight: {xs: 260, sm: 420},
          backgroundImage: 'url(/navigation-background.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{flexGrow: 1, fontWeight: 'bold'}}
          >
            Course Wiki
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {navItems.map((item) => (
              <Button key={item} sx={{color: '#fff'}} onClick={() => {
                navigate(`/${item.toLowerCase()}`);
              }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color='inherit'
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: {xs: 180, sm: 300},
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 'bold',
              fontSize: {xs: 'h3.fontSize', sm: 80},
            }}
          >
            Course Wiki
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{
              fontWeight: 'light',
              paddingLeft: {xs: 3, sm: 0},
              paddingRight: {xs: 3, sm: 0},
              fontSize: {xs: 'body1.fontSize', sm: 'h6.fontSize'},
            }}
          >
            Knowledge is the cheapest and most rewarding investment
          </Typography>
        </Box>
      </AppBar>
      <Box component='main' sx={{p: 3}}>
        <Toolbar sx={{
          minHeight: {xs: 260, sm: 420},
        }}/>
        {props.children}
      </Box>
    </Box>
  );
}

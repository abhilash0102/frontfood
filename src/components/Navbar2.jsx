import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom'; // Import Link from React Router DOM
import Stack from '@mui/material/Stack';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='warning'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT8wj6UxwpLeo_c-NBeGR56ioJYn_qVKgbZZ6IfyD9ZzcrW9DP3CIrXj-TY5oiMRiJ3HIMV4VhGxf6JEgqGLOI6ADmesG1VOEZrJ-L0hKfI0rmzod7Tqok9J-7fcvNfHtR04bVUwU5JtfTFfGiz_lhmLwpba7s1s5Gu5Grq9jeoSIxXgsTSK4ydEolITc/s320/IMG-20240417-WA0060.jpg"  sx={{ width: 60, height: 60 }}  />

    </Stack>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={"Link"} // Add Link component here
            to="/Cards" // Specify the destination route
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >&nbsp;
            FUSION FOOD RESTRANT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem component={Link} to="/fooditems" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Food Items</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/delivery" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Delivery</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/tablebooking" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Table Booking</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link} // Add Link component here
            to="/" // Specify the destination route
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Wrap all the buttons with Link component */}
            <Button color='secondary' variant='contained' size='small'
              component={Link}
              to="/Cards" // Specify the destination route
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Food Items
            </Button>&nbsp;
            <Button color='secondary' variant='contained' size='small'
              component={Link}
              to="/delivery" // Specify the destination route
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Delivery
            </Button>&nbsp;
            <Button color='secondary' variant='contained' size='small'
              component={Link}
              to="/tablebooking" // Specify the destination route
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Table Booking
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar2;

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
import Divider from '@mui/material/Divider';
import '../css/effects.css'
const pages = ['Lobby', 'Upcoming', 'Live', 'Friends', 'History'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

  const navigate = useNavigate();

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

  const navigateTo = e => {
    setAnchorElNav(null);
    const path = e.target.innerText;
    navigate(path.toLowerCase());
}

  return (
    <AppBar className='blueGradientBg' position="static" sx={{backgroundColor:'#339af0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        {/* Left logo - full display */}
        <IconButton onClick={() => {}} sx={{ p: 0, mr: 1, display: { xs: 'none', md: 'flex' } }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>

        {/* Left app name - full display */}
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            PLAYKO
          </Typography>

        {/* Container for condensed header view */}
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
              <MenuItem sx={{height: 120, justifyContent: 'center', alignItems: 'center'}}>
                <Typography>PLAYKO</Typography>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem divider key={page} onClick={navigateTo} sx={{width:400}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem sx={{height: 75, justifyContent: 'center', alignItems: 'center'}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </MenuItem>
            </Menu>
            
          </Box>

        {/* Logo for condensed header view */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
        
        {/* Container for full header menu view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={navigateTo}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
        {/* Container for avatar menu */}
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
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  pt: 2,
                  pb: 2
              }}>
                  <Box sx={{textAlign:'center'}}>
                    <Typography sx={{fontSize: 12.5, fontWeight:'600'}}>$10.87</Typography>
                    <Typography sx={{fontSize: 10}}>BALANCE</Typography>
                  </Box>
                  <Divider orientation='vertical' variant='middle' flexItem />
                  <Box sx={{textAlign:'center'}}>
                    <Typography sx={{fontSize: 12.5, fontWeight:'600'}}>293,343</Typography>
                    <Typography sx={{fontSize: 10}}>KIN</Typography>
                  </Box>
              </Box>
              <Divider variant='middle' />
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  pt: 2,
                  pb: 2
              }}>
                  <Box sx={{textAlign:'center'}}>
                    <Button sx={{fontSize: 10}}>Add funds</Button>
                  </Box>
                  <Divider orientation='vertical' variant='middle' flexItem />
                  <Box sx={{textAlign:'center'}}>
                    <Button sx={{fontSize: 10}}>Withdraw</Button>
                  </Box>
              </Box>
              <Divider sx={{mb: 1}} />
              {settings.map((setting) => (
                <MenuItem divider key={setting} onClick={handleCloseUserMenu} sx={{
                    width: 400
                }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        {/* Container for balance for full header view */}
          <Box sx={{ flexGrow: 0, flexDirection: 'column', ml: 3, textAlign: 'right', display: { xs: 'none', md: 'flex' } }}>
            <Typography sx={{fontWeight:'bold'}}>$10.87</Typography>
            <Typography sx={{fontSize:10.5, fontWeight: '600'}}>BALANCE</Typography>
          </Box>
        
          
        {/* Add funds button for full header view */}
        <Button
            className='btn'
            variant='contained'
            noWrap
            
            sx={{ mr: 2, ml: 2, display: { xs: 'none', md: 'flex' } }}
        >
            Add funds
        </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
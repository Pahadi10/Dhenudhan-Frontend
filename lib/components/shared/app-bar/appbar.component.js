import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Avatar from '_components/shared/avatar/single-avatar.component'
import { AVATAR_SIZE, AVATAR_TYPES, AVATAR_VARIANT } from '../avatar/avatar.constants'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styles } from './appbar.styles';
import { navItems } from '_pages/layout/layout.constants';
import { FormControl, SvgIcon, colors } from '@mui/material';
import Form from '../form/form.component';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Dropdown from '../dropdown/dropdown.component';
import { FormProvider } from 'react-hook-form';
import Grocery from '../../../../packages/shop/src/pages/Groceries/groceries.component';
import Search from '../search/search.component';
const NavBar = ({ image, setRoute }) => {

  const handleImageClick = () => {
    if (image.onClick) {
      image.onClick();
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const navigate = useNavigate();

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

  const handleRouting = (page) => {
    setAnchorElNav(null);
    setAnchorElUser(null);
    setRoute(page); // Navigate to the selected page
  };


  if (!sessionStorage.getItem('loggedIn')) {
    sessionStorage.setItem("loggedIn", "0")

  }

  const handleLogout = () => {
    sessionStorage.setItem("loggedIn", "0")
    setAnchorElUser(null);
    setRoute("/")
  }

  const handleCateogry = () => {
    // console.log("object")
  }

  return (
    <AppBar sx={styles.menuRoot}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <IconButton onClick={handleImageClick}>
              <img alt={image.alt} src={image.src} style={styles.logoImage} />
            </IconButton>
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
              {navItems?.main?.map(item => {
                return (<MenuItem key={item.id} onClick={() => handleRouting(item.href)}>
                  <SvgIcon sx={styles.menuIcon} component={item.icon}></SvgIcon>
                  <Typography>{item.text}</Typography>
                </MenuItem>)
              })}
            </Menu>

          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            onClick={() => handleImageClick}
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
            <IconButton onClick={handleImageClick}>
              <img alt={image.alt} src={image.src} style={styles.logoImage} />
            </IconButton>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems?.main?.map(item => {
              return (<MenuItem key={item.id} onClick={() => handleRouting(item.href)}>
                <SvgIcon sx={styles.menuIcon} component={item.icon}></SvgIcon>
                <Typography>{item.text}</Typography>
              </MenuItem>)
            })}
            <Box sx={styles.searchContainerReoot}>
              <Search 
              placeholder = 'Search For Products'
              // sx={styles.searchBar}
              />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                  variant={AVATAR_VARIANT.CIRCULAR}
                  avatarType={AVATAR_TYPES.SINGLE_AVATAR}
                  size={AVATAR_SIZE.MEDIUM}
                  src={navItems.userProfile?.src}
                  alt={navItems.userProfile?.alt}
                />
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
              {sessionStorage.getItem("loggedIn") === "1" ?
                ((navItems?.accountLoggedIn?.map(item => {
                  const handleClick = () => {
                    if (item.id === 'logout') {
                      // Run a different function for a specific item ID
                      handleLogout(item.href);
                    } else {
                      // Default handling for other items
                      handleRouting(item.href);
                    }
                  };

                  return (
                    <MenuItem key={item.id} onClick={handleClick}>
                      <SvgIcon sx={styles.menuIcon} component={item.icon}></SvgIcon>
                      <Typography>{item.text}</Typography>
                    </MenuItem>
                  );
                }))) :
                ((navItems?.accountLoggedOut?.map(item => {
                  return (<MenuItem key={item.id} onClick={() => handleRouting(item.href)}>
                    <SvgIcon sx={styles.menuIcon} component={item.icon}></SvgIcon>
                    <Typography>{item.text}</Typography>
                  </MenuItem>)
                })))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
/* import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material'; */
import Avatar from '@mui/material/Avatar';
/* import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; */
import styles from '../Header/Header.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { ThemeComponent } from 'components/Theme/ThemeComponent';
import ProfileEditModal from 'components/ProfileEditModal/ProfileEditModal';

export const Header = ({ onOpenSidebar, onOpenEdit }) => {
  const [auth] = useState(true);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  /* const [anchorEl, setAnchorEl] = useState(null); */

  const handleOpen = () => {
    setProfileModalOpen(true);
  };

  /*  const handleClose = () => {
    setAnchorEl(null);
  }; */

  const handleDrawerOpen = () => {
    if (typeof onOpenSidebar === 'function') {
      onOpenSidebar();
    } else {
      console.error('onOpenSidebar is not a valid function');
    }
  };

  /*   const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }; */

  const { user } = useAuth();

  return (
    <Box className={styles.headerContainer}>
      <AppBar position="static" style={{ background: '#161616' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.themeHeader}>
            <ThemeComponent />
          </div>
          {/*           <div className={styles.themeHeader}>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: '#161616',
                color: 'white',
                opacity: '80%',
                fontFamily: 'Poppins',
                fontSize: '14px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#161616',
                },
              }}
            >
              Theme
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                sx={{
                  backgroundColor: '#161616',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#161616',
                  },
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  textTransform: 'none',
                }}
                onClick={handleClose}
                disableRipple
              >
                Light
              </MenuItem>
              <MenuItem
                sx={{
                  backgroundColor: '#161616',
                  color: '#BEDBB0',
                  '&:hover': {
                    backgroundColor: '#161616',
                  },
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  textTransform: 'none',
                }}
                onClick={handleClose}
                disableRipple
              >
                Dark
              </MenuItem>
              <MenuItem
                sx={{
                  backgroundColor: '#161616',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#161616',
                  },
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  textTransform: 'none',
                }}
                onClick={handleClose}
                disableRipple
              >
                Violet
              </MenuItem>
            </Menu>
          </div> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'right',
              color: 'white',
              font: 'Poppins',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {user.name}
          </Typography>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
                sx={{ marginLeft: 'auto', position: 'relative' }}
              >
                <Avatar
                  variant="rounded"
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </div>
          )}
        </Toolbar>
        <ProfileEditModal
          active={isProfileModalOpen}
          onClick={() => setProfileModalOpen(false)}
        ></ProfileEditModal>
      </AppBar>
    </Box>
  );
};
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import styles from '../Header/Header.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { ThemeComponent } from 'components/Theme/ThemeComponent';
import ProfileEditModal from 'components/ProfileEditModal/ProfileEditModal';
import { selectUser } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const Header = ({ onOpenSidebar, onOpenEdit }) => {
  const [auth] = useState(true);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const userAvatar = useSelector(selectUser);

  const handleOpen = () => {
    setProfileModalOpen(true);
  };

  const handleDrawerOpen = () => {
    if (typeof onOpenSidebar === 'function') {
      onOpenSidebar();
    } else {
      console.error('onOpenSidebar is not a valid function');
    }
  };

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
                  src={userAvatar.avatarUrl}
                  alt={user.name}
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

import React from 'react';
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import CloseIcon from '@mui/icons-material/Close';
import { selectUser } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import css from './ProfileEditModal.module.css';
import AddIcon from '@mui/icons-material/Add';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'rgba(255, 255, 255, 0.3)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          color: '#fff',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '400',
        },
      },
    },
  },
});

function ProfileEditModal({ onClick, active }) {
  const userAvatar = useSelector(selectUser);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handlePasswordChange = newPassword => {};

  //const handleSubmit = async e => {
  // e.preventDefault();

  //  try {
  //    const response = await fetch('/api/updateUser', {
  //     method: 'PUT',
  //    headers: {
  //       'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  // });

  // if (response.ok) {
  //   const updatedUserData = await response.json();
  //  onUpdate(updatedUserData.user);
  //  setSnackbarMessage('User updated successfully');
  //   setSnackbarOpen(true);
  // } else {
  //   setSnackbarMessage('Failed to update user');
  //   setSnackbarOpen(true);
  //  }
  //} catch (error) {
  //   console.error('Error updating user:', error);
  //   setSnackbarMessage('Error updating user');
  //   setSnackbarOpen(true);
  // }
  // };

  return (
    <ThemeProvider theme={theme}>
      <section className={css.section_profileEdit}>
        <Box
          sx={{
            mt: 1,
            background: 'rgba(21, 21, 21, 1)',
            borderRadius: '8px',
            display: active ? 'block' : 'none',
            padding: '40px',
            '@media (max-width: 375px)': {
              padding: '24px 5px',
            },
          }}
        >
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Typography
              sx={{
                fontSize: 18,

                color: '#fff',
                fontFamily: 'Poppins',
                flexGrow: '1',
                fontWeight: '500',
              }}
              color="text.secondary"
              gutterBottom
            >
              Edit Profile
            </Typography>

            <Button
              sx={{
                marginTop: '-50px',
                marginRight: '-25px',
              }}
              onClick={() => onClick(false)}
            >
              <CloseIcon
                sx={{
                  fill: 'white',
                }}
              ></CloseIcon>
            </Button>
          </Box>

          <Avatar
            variant="rounded"
            src={userAvatar.avatarUrl}
            alt={userAvatar.name}
            sx={{
              marginLeft: '40%',
              width: '68px',
              height: '68px',
              position: 'relative',
            }}
          />
          <button className={css.buttonAdd}>
            <AddIcon sx={{ fontSize: 'small', color: 'black' }} />
          </button>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '25px',
            }}
          >
            <TextField
              name="name"
              required
              id="name"
              label="Enter your name"
              variant="outlined"
              defaultValue={userAvatar.name}
              autoFocus
            />
            <TextField
              required
              id="email"
              label="Enter your email"
              name="email"
              variant="outlined"
              defaultValue={userAvatar.email}
            />
            <Box>
              <FormControl sx={{ width: '345px' }} variant="outlined">
                <InputLabel htmlFor="password" required>
                  Create a password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  id="password"
                  defaultValue={userAvatar.password}
                  onChange={e => handlePasswordChange(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.3)' }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Create a password*"
                  required
                />
              </FormControl>
            </Box>
            <Button
              variant="text"
              className={css.btnSend}
              type="submit"
              sx={{
                mb: 1,
                background: 'rgba(190, 219, 176, 1)',
                color: 'rgba(22, 22, 22, 1)',
                fontFamily: 'Poppins',
                textTransform: 'unset',
                width: '344px',
                height: '49px',
                marginTop: '20px',
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </section>
    </ThemeProvider>
  );
}

export default ProfileEditModal;

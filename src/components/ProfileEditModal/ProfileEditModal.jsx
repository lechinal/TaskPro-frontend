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

import css from './ProfileEditModal.module.css';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(190, 219, 176, 1)',
            color: 'rgba(22, 22, 22, 1)',
          },
        },
      },
    },
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

            <Button onClick={() => onClick(false)}>
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
            }}
          />
          <Box
            component="form"
            noValidate
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '30px',
            }}
          >
            <FormControl variant="outlined">
              <InputLabel
                sx={{
                  color: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                Name
              </InputLabel>
              <OutlinedInput label="Enter your email" fullWidth />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel
                sx={{
                  color: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                Email
              </InputLabel>
              <OutlinedInput label="Enter your email" fullWidth />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  color: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.3)',
                      }}
                    ></IconButton>
                  </InputAdornment>
                }
                label="Confirm a password"
                fullWidth
              />
            </FormControl>
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

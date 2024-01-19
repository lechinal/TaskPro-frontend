import React from 'react';
import { Box, Button } from '@mui/material';
import css from './LoginForm.module.css';
import { NavLink, Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

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

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <section className={css.loginSection}>
        <Box
          sx={{
            mt: 1,
            background: 'rgba(21, 21, 21, 1)',
            borderRadius: '8px',
            padding: '40px',
            '@media (max-width: 375px)': {
                padding: '24px 5px',                 
              },             
          }}
        >
          <NavLink>
            <Link
              className={css.registerLink}
              to="/auth/register"
              underline="none"
            >
              Registration
            </Link>
            <Link className={css.loginLink} to="/login" underline="none">
              Log In
            </Link>
          </NavLink>
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
                Enter your email
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
                Confirm a password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm a password"
                fullWidth
              />
            </FormControl>
            <Button
              className={css.btnRegister}
              variant="text"
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
              Log In Now
            </Button>
          </Box>
        </Box>
      </section>
    </ThemeProvider>
  );
}

export default LoginForm;

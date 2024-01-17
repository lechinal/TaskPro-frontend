import React from 'react';
import icons from '../../images/sprite.svg';
import css from './Intro.module.css';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton : {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor:"rgba(22, 22, 22, 1)",
            color: "white",
          },
        },
      },
    },
},
});

function Intro() {
  return (
    <ThemeProvider theme={theme}>
    <section className={css.introContainer}>
      <div className={css.introWrapper}>
        <div className={css.logo} />
        <div className={css.logoWrapper}>
          <svg className={css.introSvg}>
            <use href={`${icons}#icon-logo`} />
          </svg>
          <h1 className={css.title}>Task Pro</h1>
        </div>
        <p className={css.secondText}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <div className={css.authWrapper}>
          <Button
            className={css.btnRegister}
            variant="text"
            sx={{
              mb: 1,
              background: "rgba(22, 22, 22, 1)",
              fontFamily: "Poppins",
              textTransform: 'unset',
              width: '344px',
              height: '49px',
            }}
          >
            <NavLink className={css.buttonLinkRegister} to={'/register'}>
              Registration
            </NavLink>
          </Button>
          <Button
            variant="text"
            className={css.btnLogin}
            sx={{
              mb: 1,
              fontFamily: "Poppins",
              textTransform: 'unset',
              width: '344px',
              height: '49px',
            }}
          >
            <NavLink className={css.buttonLinkLogin} to={'/login'}>
              Log In
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
    </ThemeProvider>
  );
}

export default Intro;

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography, Drawer } from '@mui/material';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import icon from '../../images/sprite.svg';

import {
  SideBarStyled,
  LogoIcon,
  PlusIcon,
  Thumb,
  LogoutIcon,
  BoardsContainer,
  BoardsList,
  TitleBox,
  IconTitle,
  IconsBox,
  Edit,
  Delete,
  IconLink,
  Title,
  IconButton,
} from './SideBar.Styled';
import Help from 'components/Help/Help';
const SideBar = ({ active, onClick }) => {
  const [setOpenAddModal] = useState(false);
  
  const theme = useTheme();

  const drawerContent = (
    <SideBarStyled>
      <Thumb>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '60px',
            bg: '#121212',
          }}
        >
          <LogoIcon>
            <use href={icon + '#icon-logo'}></use>
          </LogoIcon>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              letterSpacing: 0.7,
              fontWeight: 600,
              color: '#FFFFFF',
            }}
          >
            Task Pro
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            letterSpacing: 0.7,
            fontWeight: 400,
            color: '#FFFFFF',
            opacity: '50%',
          }}
        >
          My boards
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderTop: '1px solid',
            borderColor: 'primary.contrastText',
            padding: '14px 0',
            marginTop: '8px',
            marginBottom: '40px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              maxWidth: '92px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: 0.7,
              color: '#FFFFFF',
            }}
          >
            Create a new board
          </Typography>
          <Button
            onClick={() => setOpenAddModal(true)}
            sx={{
              backgroundColor: '#bedbb0',
              padding: '8px 10px',
              minWidth: 0,
            }}
          >
            <PlusIcon theme={theme}>
              <use href={icon + '#icon-plus'}></use>
            </PlusIcon>
          </Button>
        </Box>
        <BoardsContainer>
          <BoardsList theme={theme}>
            <TitleBox>
              <Title theme={theme}>Project Name</Title>{' '}
              <IconTitle>
                <use href={icon + '#icon-project'}></use>
              </IconTitle>
            </TitleBox>

            <IconsBox theme={theme}>
              <IconLink>
                <Delete>
                  <use href={icon + '#icon-trash'}></use>
                </Delete>
              </IconLink>
              <IconButton type="button">
                <Edit>
                  <use href={icon + '#icon-pencil-01'}></use>
                </Edit>
              </IconButton>
            </IconsBox>
          </BoardsList>
        </BoardsContainer>
      </Thumb>
      <Help />
      <Thumb>
        <Box
          sx={{
            marginTop: '24px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: 0.7,
          }}
        >
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: 0,
              minWidth: 0,
              border: 0,
              '&:hover': {
                backgroundColor: 'inherit',
                border: 0,
              },
            }}
          >
            <LogoutIcon theme={theme}>
              <use href={icon + '#icon-logout'}></use>
            </LogoutIcon>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: 0.7,
              }}
              variant="body2"
            >
              Log out
            </Typography>
          </Button>
        </Box>
      </Thumb>
    </SideBarStyled>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          sx={{
            '@media (max-width: 1279px)': {
              display: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 225,
            },
            '@media (min-width: 768px)': {
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 260,
              },
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default SideBar;

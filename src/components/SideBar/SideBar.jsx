import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography, Drawer } from '@mui/material';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import icon from '../../images/sprite.svg';

import NewBoardMainModal from 'components/MainDashboard/MainPlaceholder/NewBoardMainModal/NewBoardMainModal';

import { selectBoardsList } from '../../redux/boards/boardSelectors';
import { logout } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import EditBoardActive from 'components/MainDashboard/MainPlaceholder/EditBoardActive/EditBoardActive';
import {
  SideBarStyled,
  LogoIcon,
  PlusIcon,
  Thumb,
  LogoutIcon,
  BoardsContainer,
  TitleBox,
  IconTitle,
  IconsBox,
  Edit,
  Delete,
  IconLink,
  Title,
  IconButton,
  IconPuzzle,
  SectionLight,
  PlusButton,
} from './SideBar.Styled';
import Help from 'components/Help/Help';

const SideBar = ({ active, onClick }) => {
  const [openModal, setOpenModal] = useState(false);

  const boards = useSelector(selectBoardsList);

  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const theme = useTheme();

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

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
            borderColor: '#FFFFFF1A',
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
          <PlusButton
            onClick={handleOpenModal}
            sx={{
              background: '#bedbb0',
              padding: '8px 10px',
              minWidth: 0,
            }}
          >
            <PlusIcon theme={theme}>
              <use href={icon + '#icon-plus1'}></use>
            </PlusIcon>
          </PlusButton>
        </Box>
        {openModal && (
          <NewBoardMainModal setOpenModal={setOpenModal} active={openModal} />
        )}

        <BoardsContainer>
          {boards.map(board => (
            <TitleBox key={board.title}>
              <IconTitle>
                <use href={icon + '#icon-project'}></use>
              </IconTitle>
              <Title theme={theme}>{board.title}</Title>
            </TitleBox>
          ))}

          <TitleBox>
            <IconTitle>
              <use href={icon + '#icon-project'}></use>
            </IconTitle>
            <Title theme={theme}>Project Name</Title>
          </TitleBox>
          <IconsBox theme={theme}>
            <IconButton type="button" onClick={() => handleOpenEditModal()}>
              <Edit>
                <use href={icon + '#icon-pencil-01'}></use>
              </Edit>
            </IconButton>

            <IconLink>
              <Delete>
                <use href={icon + '#icon-trash'}></use>
              </Delete>
            </IconLink>
          </IconsBox>
        </BoardsContainer>

        <SectionLight>
          <IconPuzzle>
            <use href={icon + '#icon-puzzle'}></use>
          </IconPuzzle>
          <p>Neon Light Project</p>
        </SectionLight>
      </Thumb>

      <Thumb>
        <Help />
        <Box
          sx={{
            marginTop: '24px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: 0.7,
          }}
          onClick={handleLogout}
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
            onClick={handleLogout}
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
          variant="temporary"
          open={active}
          onClose={onClick}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '@media (min-width: 1440px)': {
              display: { xs: 'block', sm: 'none' },
            },

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 225,
            },

            '@media (min-width: 768px)': {
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 260,
                padding: '0px',
              },
            },
          }}
        >
          {drawerContent}
        </Drawer>
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
      {openEditModal && <EditBoardActive setOpenModal={setOpenEditModal} />}
    </>
  );
};

export default SideBar;

import 'react-datepicker/dist/react-datepicker.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react';
// import MyDatePicker from './MyDatePicker';

import RadioLabel from './RadioLabel';
import { addCard } from '../../redux/boards/boardOperations';
import { useDispatch } from 'react-redux';
export const CardFormAdd = ({ onClose, boardId }) => {
  // const handleAddCard = () => {
  //   const newCard = { title, description };
  //   dispatch(addCard(newCard));
  //   setTitle('');
  //   setDescription('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };
  const handleAddCard = () => {
    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    const cardData = {
      title,
      description,
    };

    dispatch(addCard({ boardId, data: cardData }));

    setTitle('');
    setDescription('');
    onClose();
  };
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
            color: 'rgba(255, 255, 255, 0.3)',
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

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: 'fixed',
          zIndex: 1000,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box
          style={{
            mt: 1,
            background: 'rgba(21, 21, 21, 1)',
            borderRadius: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            width: '350px',
            height: '425px',
            '@media (maxWidth: 375px)': {
              padding: '24px 5px',
            },
          }}
        >
          <Typography
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              textTransform: 'none',
              marginBottom: '20px',
            }}
          >
            Add card
          </Typography>
          <Box
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              // defaultValue=""
              value={description}
              onChange={handleDescriptionChange}
            />
          </Box>
          <Typography
            style={{
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              textTransform: 'none',
              marginTop: '15px',
              marginBottom: '5px',
            }}
          >
            Label color
          </Typography>

          <RadioLabel />
          <Typography
            style={{
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              textTransform: 'none',
              marginTop: '15px',
            }}
          >
            Deadline
          </Typography>
          {/* <MyDatePicker /> */}
          <Button
            // onClick={onClose}
            onClick={handleAddCard}
            style={{
              mb: 1,
              background: 'rgba(190, 219, 176, 1)',
              color: 'rgba(22, 22, 22, 1)',
              fontFamily: 'Poppins',
              textTransform: 'unset',
              width: '100%',
              height: '49px',
              marginTop: '20px',
              gap: '10px',
              '&:hover': {
                color: 'rgba(22, 22, 22, 1)',
                backgroundColor: 'rgba(190, 219, 176, 1)',
              },
            }}
          >
            <AddBoxIcon
              style={{
                width: '28px',
                height: '28px',
              }}
            />
            <Typography
              style={{
                color: 'rgba(22, 22, 22, 1)',
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '14px',
                textTransform: 'none',
              }}
            >
              Add
            </Typography>
          </Button>
        </Box>
      </div>
    </ThemeProvider>
  );
};

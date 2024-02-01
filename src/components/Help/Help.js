import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import help from '../../images/help.png';
import ModalHelp from 'components/ModalHelp/ModalHelp';

export default function Help() {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOnClose = () => setVisibleModal(false);

  return (
    <div className="text-2xl">
      <div className=" h-[238px] w-[197px] sm:h-[272px] sm:w-[212px] rounded-[8px] ">
        <div className="flex flex-col p-[14px]">
          <img
            alt="info"
            className="mb-[14px]"
            height={'78px'}
            width={'54px'}
            src={help}
          ></img>
          <Box
            sx={{
              marginBottom: '18px',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.42',
                letterSpacing: 0.7,
                color: 'secondary.dark',
              }}
            >
              If you need help with
              <Link
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.33',
                  letterSpacing: 0.7,
                  color: 'primary.main',
                  textDecoration: 'none',
                }}
                /*  onClick={openModal} */
              >
                {' '}
                TaskPro
              </Link>
              , check out our support resources or reach out to our customer
              support team.
            </Typography>
          </Box>

          <button
            onClick={() => setVisibleModal(true)}
            className="flex  items-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[20px] h-[20px]  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            <p className=" ml-[8px] text-sm font-medium">Need help?</p>
          </button>
        </div>
      </div>
      <ModalHelp onClose={handleOnClose} visible={visibleModal}></ModalHelp>
    </div>
  );
}

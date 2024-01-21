import styled from 'styled-components';

import { Box } from '@mui/material';

export const SideBarStyled = styled(Box)`
  position: fixed;
  height: 100%;
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  background: #121212;
  padding: 14px;

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-width: 260px;
    padding: 24px 24px 24px 24px;
    overflow-x: hidden;
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
  fill: white;
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #bedbb0;
`;

export const LogoutIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: white;
  background-color: transparent;
`;

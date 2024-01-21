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
  fill: black;
  background: #bedbb0;

`;

export const LogoutIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: white;
  background-color: transparent;
`;
export const BoardsContainer = styled.div`
  background: #1f1f1f;
  height: 61px;
  display: flex;
  align-items: center;
  width: 260px;
`;

export const BoardsList = styled.ul`
  position: relative;
  width: 260px;
  top: 0;
  left: -24px;
  gap: 4px;
  background: #1f1f1f;
  height: 61px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  max-height: 122px;
  overflow-y: auto;

  direction: rtl;
`;

export const BoardItem = styled.li`
  position: relative;
  direction: ltr;
  height: 61px;
  display: flex;
  align-items: center;
`;

export const IconTitle = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: white;
`;

export const Title = styled.div`
  width: 200px;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #ffffff;
`;

export const Edit = styled.svg`
  width: 16px;
  height: 16px;
  stroke: transaprent;
  margin-right: 8px;
`;

export const Delete = styled.svg`
  width: 16px;
  height: 16px;
  stroke: white;
  fill: white;
`;

export const BoardLink = styled.link`
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  font-size: 14px;
`;
export const IconsBox = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`;

export const IconLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`;
export const IconPuzzle = styled.svg`
  width: 16px;
  height: 16px;
  stroke: transaprent;
  margin-right: 8px;
`;

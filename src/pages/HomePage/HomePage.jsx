import React, { useState } from 'react';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import ProfileEditModal from 'components/ProfileEditModal/ProfileEditModal';

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <ProfileEditModal />
    </div>
  );
}

export default HomePage;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAppTheme } from 'Redux/Theme/Slice';
import { themeSelector } from 'Redux/selectors';
import { deviceSelector } from 'Redux/selectors';

import { AppHeader, AppHeaderContainer } from './AppBar.styled';
import { UserNav } from 'Components/SiteNavigation/UserNav/UserNav';
import { MobileMenuButton } from 'Components/Buttons/MobileMenuButton/MobileMenuButton';
import { AppLogo } from 'Components/AppLogo/AppLogo';
import { ThemeSwitcher } from 'Components/Buttons/ThemeSwitcher/ThemeSwitcher';
import { MobileMenu } from 'Components/UserMenuMobile/MobileMenu';
import { SlMenu } from 'react-icons/sl';

export const AppBar = () => {
  const [showModal, setShowModal] = useState(false);
  const smartPhoneDevice = useSelector(deviceSelector);

  useEffect(() => {
    if (!smartPhoneDevice) {
      setShowModal(false);
    }
  }, [smartPhoneDevice]);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  const activatedLinkHandler = () => {
    setShowModal(false);
  };

  const currentAppTheme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const themeChangeHandler = () => {
    if (currentAppTheme === 'light') {
      dispatch(changeAppTheme({ value: 'dark' }));
    } else {
      dispatch(changeAppTheme({ value: 'light' }));
    }
  };

  const closedMobileMenu = smartPhoneDevice & !showModal;
  return (
    <>
      <AppHeader>
        {showModal && (
          <MobileMenu
            onClick={changeModalStatusHandler}
            onLinkClick={activatedLinkHandler}
            isOpenedModal={showModal}
          />
        )}
        <AppHeaderContainer>
          <AppLogo onClick={activatedLinkHandler} />
          {closedMobileMenu ? (
            <MobileMenuButton
              isSmartPhone={smartPhoneDevice}
              isOpenedModal={showModal}
              onClick={changeModalStatusHandler}
            >
              <SlMenu size={18} color="#000" />
            </MobileMenuButton>
          ) : (
            <UserNav />
          )}
          {!smartPhoneDevice && (
            <ThemeSwitcher onClick={() => themeChangeHandler()} />
          )}
        </AppHeaderContainer>
      </AppHeader>
    </>
  );
};

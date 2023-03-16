import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAppTheme } from 'Redux/Theme/Slice';
import { themeSelector } from 'Redux/selectors';
import { deviceSelector } from 'Redux/selectors';

import { AppHeader, AppHeaderContainer } from './AppBar.styled';
import { UserNav } from 'Components/SiteNavigation/UserNav/UserNav';
import { MobileMenuButton } from 'Components/UserMenuMobile/MobileMenu.styled';
import { AppLogo } from 'Components/AppLogo/AppLogo';
import { ThemeSwitcher } from 'Components/Buttons/ThemeSwitcher/ThemeSwitcher';
import { MobileMenu } from 'Components/UserMenuMobile/MobileMenu';
import { SlMenu } from 'react-icons/sl';

export const AppBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const smartPhoneDevice = useSelector(deviceSelector);

  useEffect(() => {
    if (!smartPhoneDevice) {
      setShowMobileMenu(false);
    }
  }, [smartPhoneDevice]);

  const mobileMenuStatusHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const activatedLinkHandler = () => {
    setShowMobileMenu(false);
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

  const closedMobileMenu = smartPhoneDevice & !showMobileMenu;
  return (
    <>
      <AppHeader>
        {showMobileMenu && (
          <MobileMenu
            onClick={mobileMenuStatusHandler}
            onLinkClick={activatedLinkHandler}
            isOpenedModal={showMobileMenu}
          />
        )}
        <AppHeaderContainer>
          <AppLogo onClick={activatedLinkHandler} />
          {closedMobileMenu ? (
            <MobileMenuButton
              isSmartPhone={smartPhoneDevice}
              isOpenedModal={showMobileMenu}
              onClick={mobileMenuStatusHandler}
            >
              <SlMenu size={18} />
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

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
import { PageContainer } from 'Components/Common/PageContainer.styled';
import UserMenuMobile from 'Components/UserMenuMobile/UserMenuMobile';
import { SlMenu } from 'react-icons/sl';

export const AppBar = () => {
  const [showModal, setShowModal] = useState(false);
  const smartPhoneDevice = useSelector(deviceSelector);

  useEffect(() => {
    const appHeaderHeight = document
      .querySelector('header')
      .getBoundingClientRect().height;

    document.body.style.paddingTop = `${appHeaderHeight}px`;
    console.log(appHeaderHeight);
  });

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
    <AppHeader>
      <PageContainer>
        <AppHeaderContainer>
          <AppLogo onClick={activatedLinkHandler} />
          {showModal && (
            <UserMenuMobile
              onClick={changeModalStatusHandler}
              onLinkClick={activatedLinkHandler}
            />
          )}
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
      </PageContainer>
    </AppHeader>
  );
};

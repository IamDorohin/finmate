import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { AppHeader, AppHeaderContainer } from './AppBar.styled';
import { UserMenu } from 'Components/UserMenu/UserMenu';
// import { MobileMenuHeaderContainer } from 'Components/UserMenuMobile/UserMenuMobile.styled';
import { MobileMenuButton } from 'Components/Buttons/MobileMenuButton/MobileMenuButton';
import { AppLogo } from 'Components/AppLogo/AppLogo';
import { Modal } from 'Components/Common/Modal/Modal';
import { Switcher } from 'Components/Buttons/Switcher/Switcher';
import { PageContainer } from 'Components/Common/PageContainer.styled';
import { deviceSelector } from 'Redux/selectors';
import UserMenuMobile from 'Components/UserMenuMobile/UserMenuMobile';
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

  const closedMobileMenu = smartPhoneDevice & !showModal;
  return (
    <AppHeader>
      <PageContainer>
        <AppHeaderContainer>
          <AppLogo onClick={activatedLinkHandler} />
          {showModal && (
            <Modal onClose={changeModalStatusHandler}>
              <UserMenuMobile
                onClick={changeModalStatusHandler}
                onLinkClick={activatedLinkHandler}
              />
            </Modal>
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
            <UserMenu />
          )}
          {!smartPhoneDevice && <Switcher />}
        </AppHeaderContainer>
      </PageContainer>
    </AppHeader>
  );
};

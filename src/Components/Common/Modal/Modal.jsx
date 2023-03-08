// import { AppLogo } from 'Components/AppLogo/AppLogo';
import { createPortal } from 'react-dom';
// import { VscChromeClose } from 'react-icons/vsc';
// import {
//   UserMenuList,
//   UserMenuItem,
//   UserMenuLink,
// } from 'Components/UserMenu/UserMenu.styled';
import {
  ModalBackdrop,
  ModalContent,
  //   ModalHeaderContainer,
  //   ModalCloseButton,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

// const menuItemsContent = [
//   { href: 'balance', text: 'Balance' },
//   { href: 'budget', text: 'Budget' },
//   { href: 'stocks', text: 'Stocks' },
// ];

export const Modal = ({ children }) => {
  return createPortal(
    <ModalBackdrop>
      <ModalContent>
        {children}
        {/* <ModalHeaderContainer>
          <AppLogo /> */}
        {/* <ModalCloseButton type="button" onClick={onClick}>
            <VscChromeClose size="100%" />
          </ModalCloseButton> */}
        {/* </ModalHeaderContainer> */}
        {/* <UserMenuList>
          {menuItemsContent.map(({ href, text }) => (
            <UserMenuItem key={text}>
              <UserMenuLink to={href}>{text}</UserMenuLink>
            </UserMenuItem>
          ))}
        </UserMenuList> */}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

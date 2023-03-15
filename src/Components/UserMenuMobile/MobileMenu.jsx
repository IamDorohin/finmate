import { useDispatch, useSelector } from 'react-redux';
import { changeAppTheme } from 'Redux/Theme/Slice';
import { AppLogo } from 'Components/AppLogo/AppLogo';
import { ThemeSwitcher } from 'Components/Buttons/ThemeSwitcher/ThemeSwitcher';
import {
  UserNavList,
  UserNavItem,
  UserNavLink,
} from 'Components/SiteNavigation/UserNav/UserNav.styled';
import {
  MobileMenuContainer,
  MobileMenuHeader,
  MobileMenuButton,
} from './MobileMenu.styled';
import { SupportContact } from 'Components/Common/SupportContact/SupportContact';
import { themeSelector } from 'Redux/selectors';
import { VscChromeClose } from 'react-icons/vsc';
import { UserContainer } from 'Components/UserContainer/UserContainer';

const menuItemsContent = [
  { href: '/balance', text: 'Balance', status: 'true' },
  { href: '/budget', text: 'Budget', status: 'true' },
  { href: '/stocks', text: 'Stocks', status: 'false' },
];

export const MobileMenu = ({ onClick, onLinkClick, isOpenedModal }) => {
  const currentAppTheme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const themeChangeHandler = () => {
    if (currentAppTheme === 'light') {
      dispatch(changeAppTheme({ value: 'dark' }));
    } else {
      dispatch(changeAppTheme({ value: 'light' }));
    }
  };

  return (
    <MobileMenuContainer isOpenedModal={isOpenedModal}>
      <ThemeSwitcher onClick={() => themeChangeHandler()} />
      <MobileMenuHeader>
        <AppLogo />
        <MobileMenuButton type="button" onClick={onClick}>
          <VscChromeClose size={20} />
        </MobileMenuButton>
      </MobileMenuHeader>
      <UserNavList>
        {menuItemsContent.map(({ href, text, status }) => (
          <UserNavItem key={text}>
            <UserNavLink
              to={href}
              status={status}
              onClick={() => onLinkClick()}
            >
              {text}
            </UserNavLink>
          </UserNavItem>
        ))}
      </UserNavList>
      <UserContainer />
      <SupportContact />
    </MobileMenuContainer>
  );
};

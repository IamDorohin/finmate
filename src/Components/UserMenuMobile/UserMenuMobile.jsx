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
  MobileMenuModalBackdrop,
  MobileMenuModalContent,
  MobileMenuContainer,
  MobileMenuButtonsContainer,
} from './UserMenuMobile.styled';
import { MobileMenuButton } from 'Components/Buttons/MobileMenuButton/MobileMenuButton';
import { LogoutButton } from 'Components/Buttons/LogoutButton/LogoutButton';
import { themeSelector } from 'Redux/selectors';
import { VscChromeClose } from 'react-icons/vsc';
import { UserContainer } from 'Components/UserContainer/UserContainer';

const menuItemsContent = [
  { href: 'balance', text: 'Balance' },
  { href: 'budget', text: 'Budget' },
  { href: 'stocks', text: 'Stocks' },
];

const UserMenuMobile = ({ onClick, onLinkClick }) => {
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
    <MobileMenuModalBackdrop>
      <MobileMenuModalContent>
        <MobileMenuContainer>
          <AppLogo />
          <MobileMenuButton onClick={onClick}>
            <VscChromeClose size={20} color="#000" />
          </MobileMenuButton>
        </MobileMenuContainer>
        <UserNavList>
          {menuItemsContent.map(({ href, text }) => (
            <UserNavItem key={text}>
              <UserNavLink to={href} onClick={() => onLinkClick()}>
                {text}
              </UserNavLink>
            </UserNavItem>
          ))}
        </UserNavList>
        <UserContainer />
        <MobileMenuButtonsContainer>
          <ThemeSwitcher onClick={() => themeChangeHandler()} />
          <LogoutButton />
        </MobileMenuButtonsContainer>
      </MobileMenuModalContent>
    </MobileMenuModalBackdrop>
  );
};

export default UserMenuMobile;

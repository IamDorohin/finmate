import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAppTheme } from 'Redux/Theme/Slice';
import { AppLogo } from 'Components/AppLogo/AppLogo';
import { ThemeSwitcher } from 'Components/Buttons/ThemeSwitcher/ThemeSwitcher';
import {
  UserMenuList,
  UserMenuItem,
  UserMenuLink,
} from 'Components/UserMenu/UserMenu.styled';
import { MobileMenuButtonsContainer } from './UserMenuMobile.styled';
import { AppHeaderContainer } from 'Components/AppBar/AppBar.styled';
import { MobileMenuButton } from 'Components/Buttons/MobileMenuButton/MobileMenuButton';
import { UserProfileCard } from 'Components/UserProfileCard/UserProfileCard';
import { SettingsCard } from 'Components/Common/SettingsCard/SettingsCard';
// import { SettingsButton } from 'Components/Buttons/SettingsButton/SettingsButton';
import { LogoutButton } from 'Components/Buttons/LogoutButton/LogoutButton';
import { themeSelector } from 'Redux/selectors';
import { VscChromeClose } from 'react-icons/vsc';
import { UserContainer } from 'Components/BalancePageComponents/UserContainer/UserContainer';

const menuItemsContent = [
  { href: 'balance', text: 'Balance' },
  { href: 'budget', text: 'Budget' },
  { href: 'stocks', text: 'Stocks' },
];

const UserMenuMobile = ({ onClick, onLinkClick }) => {
  // const [settingsSelect, setsSettingsSelect] = useState(false);
  // const isSettingsCard = settingsSelect === true;

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
    <>
      <AppHeaderContainer>
        <AppLogo />
        <MobileMenuButton onClick={onClick}>
          <VscChromeClose size={20} color="#000" />
        </MobileMenuButton>
      </AppHeaderContainer>
      <UserMenuList>
        {menuItemsContent.map(({ href, text }) => (
          <UserMenuItem key={text}>
            <UserMenuLink to={href} onClick={() => onLinkClick()}>
              {text}
            </UserMenuLink>
          </UserMenuItem>
        ))}
      </UserMenuList>
      <UserContainer />
      {/* {!isSettingsCard ? <UserProfileCard /> : <SettingsCard />} */}
      <MobileMenuButtonsContainer>
        {/* <SettingsButton onClick={() => setsSettingsSelect(!settingsSelect)} /> */}
        <ThemeSwitcher onClick={() => themeChangeHandler()} />
        <LogoutButton />
      </MobileMenuButtonsContainer>
    </>
  );
};

export default UserMenuMobile;

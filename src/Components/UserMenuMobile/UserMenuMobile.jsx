import { changeAppTheme } from 'Redux/Theme/Slice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLogo } from 'Components/AppLogo/AppLogo';
import { ThemeSwitcher } from 'Components/Buttons/ThemeSwitcher/ThemeSwitcher';
import {
  UserMenuList,
  UserMenuItem,
  UserMenuLink,
} from 'Components/UserMenu/UserMenu.styled';
import {
  MobileMenuHeaderContainer,
  MobileMenuButtonsContainer,
} from './UserMenuMobile.styled';
import { MobileMenuButton } from 'Components/Buttons/MobileMenuButton/MobileMenuButton';
import { UserProfileCard } from 'Components/UserProfileCard/UserProfileCard';
import { SettingsCard } from 'Components/Common/SettingsCard/SettingsCard';
import { SettingsButton } from 'Components/Buttons/SettingsButton/SettingsButton';
import { LogoutButton } from 'Components/Buttons/LogoutButton/LogoutButton';
import { themeSelector } from 'Redux/selectors';
import { VscChromeClose } from 'react-icons/vsc';

const menuItemsContent = [
  { href: 'balance', text: 'Balance' },
  { href: 'budget', text: 'Budget' },
  { href: 'stocks', text: 'Stocks' },
];

const UserMenuMobile = ({ onClick }) => {
  const [settingsSelect, setsSettingsSelect] = useState(false);
  const isSettingsCard = settingsSelect === true;

  const currentAppTheme = useSelector(themeSelector);
  console.log('currentAppTheme', currentAppTheme);
  console.log('changeAppTheme', changeAppTheme);
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
      <MobileMenuHeaderContainer>
        <AppLogo />
        <MobileMenuButton onClick={onClick}>
          <VscChromeClose size={20} color="#000" />
        </MobileMenuButton>
      </MobileMenuHeaderContainer>
      <UserMenuList>
        {menuItemsContent.map(({ href, text }) => (
          <UserMenuItem key={text}>
            <UserMenuLink to={href}>{text}</UserMenuLink>
          </UserMenuItem>
        ))}
      </UserMenuList>
      {!isSettingsCard ? <UserProfileCard /> : <SettingsCard />}
      <MobileMenuButtonsContainer>
        <SettingsButton onClick={() => setsSettingsSelect(!settingsSelect)} />
        <ThemeSwitcher onClick={() => themeChangeHandler()} />
        <LogoutButton />
      </MobileMenuButtonsContainer>
    </>
  );
};

export default UserMenuMobile;

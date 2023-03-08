import { GiTakeMyMoney } from 'react-icons/gi';
import {
  AppLogoContainer,
  AppLogoLink,
  AppLogoIconContainer,
  AppLogoPrimaryEl,
  AppLogoSecondaryEl,
} from './AppLogo.styled';

export const AppLogo = ({ onClick }) => {
  return (
    <AppLogoContainer>
      <AppLogoLink to="/" onClick={() => onClick()}>
        <AppLogoIconContainer>
          <GiTakeMyMoney color="inherit" size="100%" />
        </AppLogoIconContainer>
        <AppLogoPrimaryEl>Fin</AppLogoPrimaryEl>
        <AppLogoSecondaryEl>Mate</AppLogoSecondaryEl>
      </AppLogoLink>
    </AppLogoContainer>
  );
};

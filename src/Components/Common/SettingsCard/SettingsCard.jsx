import { HiUserCircle } from 'react-icons/hi';
import {
  SettingsCardContainer,
  UserProfileLogoContainer,
  SettingsCardContent,
} from './SettingsCard.styled';

export const SettingsCard = ({ onClick, currentState }) => {
  return (
    <SettingsCardContainer onClick={onClick} animation={currentState}>
      <UserProfileLogoContainer>
        <HiUserCircle size="100%" />
      </UserProfileLogoContainer>
      <SettingsCardContent>Your settings will be here soon</SettingsCardContent>
    </SettingsCardContainer>
  );
};

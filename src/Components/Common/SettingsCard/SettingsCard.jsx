import { HiUserCircle } from 'react-icons/hi';
import {
  SettingsCardContainer,
  UserProfileLogoContainer,
  SettingsCardContent,
} from './SettingsCard.styled';

export const SettingsCard = ({ onClick }) => {
  return (
    <SettingsCardContainer>
      <UserProfileLogoContainer onClick={onClick}>
        <HiUserCircle size="100%" />
      </UserProfileLogoContainer>
      <SettingsCardContent>Your settings will be here soon</SettingsCardContent>
    </SettingsCardContainer>
  );
};

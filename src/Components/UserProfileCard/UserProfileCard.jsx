import { RiSettings4Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import {
  UserProfileCardContainer,
  UserProfileAvatar,
  UserProfileNickname,
  SettingsLogoContainer,
} from './UserProfileCard.styled';

export const UserProfileCard = ({ onClick, currentState }) => {
  console.log('1', currentState);
  return (
    <UserProfileCardContainer onClick={onClick} animation={currentState}>
      <SettingsLogoContainer>
        <RiSettings4Fill size="100%" />
      </SettingsLogoContainer>
      <UserProfileAvatar>
        <FaUserCircle size="100%" />
      </UserProfileAvatar>
      <UserProfileNickname>Nickname</UserProfileNickname>
    </UserProfileCardContainer>
  );
};

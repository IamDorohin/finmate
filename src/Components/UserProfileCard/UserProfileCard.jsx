import {
  UserProfileCardContainer,
  UserProfileAvatar,
  UserProfileNickname,
} from './UserProfileCard.styled';
import { FaUserCircle } from 'react-icons/fa';

export const UserProfileCard = () => {
  return (
    <UserProfileCardContainer>
      <UserProfileAvatar>
        <FaUserCircle size="100%" />
      </UserProfileAvatar>
      <UserProfileNickname>Nickname</UserProfileNickname>
    </UserProfileCardContainer>
  );
};

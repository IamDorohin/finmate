import { FaUserCircle } from 'react-icons/fa';
import {
  UserProfileWrapper,
  UserProfileCardContainer,
  UserProfileMainInfo,
  UserProfileHint,
  UserProfileAvatar,
  UserProfileNickname,
  UserProfileSettings,
  UserProfileSettingsList,
  UserProfileSettingsItem,
} from './UserProfileCard.styled';

export const UserProfileCard = ({ onClick, settingsStatus }) => {
  console.log('settingsStatus', settingsStatus);

  return (
    <UserProfileWrapper>
      <UserProfileCardContainer
        onClick={onClick}
        settingsStatus={settingsStatus}
      >
        <UserProfileMainInfo settingsStatus={settingsStatus}>
          <UserProfileAvatar settingsStatus={settingsStatus}>
            <FaUserCircle size="100%" color="#fff" />
          </UserProfileAvatar>
          <UserProfileNickname>Nickname</UserProfileNickname>
          {!settingsStatus ? (
            <UserProfileHint>Tap to open menu</UserProfileHint>
          ) : (
            <UserProfileHint>Tap to close menu</UserProfileHint>
          )}
        </UserProfileMainInfo>
        {settingsStatus && (
          <UserProfileSettings>
            <UserProfileSettingsList settingsStatus={settingsStatus}>
              <UserProfileSettingsItem>personal data</UserProfileSettingsItem>
              <UserProfileSettingsItem>logout</UserProfileSettingsItem>
            </UserProfileSettingsList>
          </UserProfileSettings>
        )}
      </UserProfileCardContainer>
    </UserProfileWrapper>
  );
};

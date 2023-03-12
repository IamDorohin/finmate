import { useState } from 'react';
import { UserProfileCard } from 'Components/UserContainer/UserProfileCard/UserProfileCard';
import { SettingsCard } from 'Components/UserContainer/SettingsCard/SettingsCard';
import { UserContainerEl } from './UserContainer.styled';

export const UserContainer = () => {
  const [settingsSelect, setsSettingsSelect] = useState(false);
  const isSettingsCard = settingsSelect === true;

  return (
    <UserContainerEl>
      {!isSettingsCard ? (
        <UserProfileCard
          onClick={() => setsSettingsSelect(!settingsSelect)}
          currentState={isSettingsCard}
        />
      ) : (
        <SettingsCard
          onClick={() => setsSettingsSelect(!settingsSelect)}
          currentState={isSettingsCard}
        />
      )}
    </UserContainerEl>
  );
};

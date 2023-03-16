import { useSelector } from 'react-redux';
import { useState } from 'react';
import { deviceSelector } from 'Redux/selectors';
import { UserProfileCard } from 'Components/UserProfileCard/UserProfileCard';
import {
  StatisticsContainer,
  FlexContainer,
  StatisticsDetails,
} from './StatisticsSection.styled';

export const StatisticsSection = () => {
  const smartPhoneDevice = useSelector(deviceSelector);

  const [showSettings, setShowSettings] = useState(false);

  const showSettingsHandler = () => {
    setShowSettings(!showSettings);
  };

  return (
    <StatisticsContainer>
      <FlexContainer>
        <StatisticsDetails />
        {!smartPhoneDevice && (
          <UserProfileCard
            onClick={showSettingsHandler}
            settingsStatus={showSettings}
          />
        )}
      </FlexContainer>
    </StatisticsContainer>
  );
};

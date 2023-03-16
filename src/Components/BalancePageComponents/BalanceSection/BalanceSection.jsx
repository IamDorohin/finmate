import { useSelector } from 'react-redux';
import { useState } from 'react';
import { deviceSelector } from 'Redux/selectors';
import { RxBarChart } from 'react-icons/rx';
import { UserProfileCard } from 'Components/UserProfileCard/UserProfileCard';
import {
  BalanceSection,
  BalanceContainer,
  FlexContainer,
  BalanceSummary,
  BalanceTitle,
  BalanceContent,
  BalanceAmount,
  BalanceAmountContent,
  BalanceChartContainer,
} from './BalanceSection.styled';

export const HeroSection = () => {
  const smartPhoneDevice = useSelector(deviceSelector);

  const [showSettings, setShowSettings] = useState(false);

  const showSettingsHandler = () => {
    setShowSettings(!showSettings);
  };

  console.log('smartPhoneDevice', smartPhoneDevice);

  return (
    <BalanceSection>
      <FlexContainer>
        <BalanceContainer>
          <BalanceSummary>
            <BalanceTitle>Well done, mate!</BalanceTitle>
            <BalanceContent>Payment balance is positive!</BalanceContent>
            <BalanceAmount>
              <BalanceAmountContent>8 000 000 ₴</BalanceAmountContent>
            </BalanceAmount>
          </BalanceSummary>
          {smartPhoneDevice && (
            <BalanceChartContainer>
              <RxBarChart size={50} color={'#fff'} />
            </BalanceChartContainer>
          )}
        </BalanceContainer>
        {!smartPhoneDevice && (
          <UserProfileCard
            onClick={showSettingsHandler}
            settingsStatus={showSettings}
          />
        )}
      </FlexContainer>
    </BalanceSection>
  );
};

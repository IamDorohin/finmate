import { useSelector } from 'react-redux';
import { deviceSelector } from 'Redux/selectors';
import { RxBarChart } from 'react-icons/rx';
import { UserContainer } from '../../UserContainer/UserContainer';
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
        {!smartPhoneDevice && <UserContainer />}
      </FlexContainer>
    </BalanceSection>
  );
};

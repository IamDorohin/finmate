import { RxBarChart } from 'react-icons/rx';
import { PageContainer } from 'Components/Common/PageContainer.styled';
import {
  BalanceSection,
  BalanceContainer,
  BalanceSummary,
  BalanceTitle,
  BalanceText,
  BalanceAmount,
  BalanceAmountContent,
  BalanceChartContainer,
} from './BalanceSection.styled';

export const HeroSection = () => {
  return (
    <BalanceSection>
      <PageContainer>
        <BalanceContainer>
          <BalanceSummary>
            <BalanceTitle>Well done, mate!</BalanceTitle>
            <BalanceText>You payment balance is</BalanceText>
            <BalanceAmount>
              <BalanceAmountContent>8 000 000 ₴</BalanceAmountContent>
            </BalanceAmount>
          </BalanceSummary>
          <BalanceChartContainer>
            <RxBarChart size={50} color={'#fff'} />
          </BalanceChartContainer>
        </BalanceContainer>
      </PageContainer>
    </BalanceSection>
  );
};

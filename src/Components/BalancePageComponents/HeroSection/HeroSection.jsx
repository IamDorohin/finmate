import { PageContainer } from 'Components/Common/PageContainer.styled';
import { HeroSectionContainer } from './HeroSection.styled';
import { SummaryBalance } from 'Components/SummaryBalance/SummaryBalance';

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <PageContainer>
        <SummaryBalance />
      </PageContainer>
    </HeroSectionContainer>
  );
};

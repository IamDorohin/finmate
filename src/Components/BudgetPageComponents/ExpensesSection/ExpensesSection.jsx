import { PageContainer } from 'Components/Common/PageContainer.styled';
import {
  ExpensesSectionContainer,
  FlexContainer,
  ExpensesSectionWrapper,
} from './ExpensesSection.styled';

export const ExpensesSection = () => {
  return (
    <ExpensesSectionContainer>
      <PageContainer>
        <FlexContainer>
          <ExpensesSectionWrapper></ExpensesSectionWrapper>
        </FlexContainer>
      </PageContainer>
    </ExpensesSectionContainer>
  );
};

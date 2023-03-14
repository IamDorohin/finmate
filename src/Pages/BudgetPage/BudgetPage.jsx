import { ExpensesSection } from 'Components/BudgetPageComponents/ExpensesSection/ExpensesSection';
import { IncomeSection } from 'Components/BudgetPageComponents/IncomeSection/IncomeSection';
import { StatisticsSection } from 'Components/BudgetPageComponents/StatisticsSection/StatisticsSection';

export const BudgetPage = () => {
  return (
    <>
      <StatisticsSection />
      <ExpensesSection />
      <IncomeSection />
    </>
  );
};

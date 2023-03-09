import { HeroSection } from 'Components/BalancePageComponents/BalanceSection/BalanceSection';
import { PaymentAccountsSection } from 'Components/BalancePageComponents/PaymentAccountsSection/PaymentAccountsSection';
import { InvestmentsSection } from 'Components/BalancePageComponents/InvestmentsSection/InvestmentsSection';
import { DebtsSection } from 'Components/BalancePageComponents/DebtsSection/DebtsSection';

export const BalancePage = () => {
  return (
    <>
      <HeroSection />
      <PaymentAccountsSection />
      <DebtsSection />
      <InvestmentsSection />
    </>
  );
};

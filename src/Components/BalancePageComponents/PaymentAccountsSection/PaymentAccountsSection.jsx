import {
  SectionContainer,
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './PaymentAccountsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { PageContainer } from 'Components/Common/PageContainer.styled';
import data from 'Helpers/sectionsHeaderData.json';
import payment from 'Helpers/paymentAccountsData.json';
import { GiTakeMyMoney } from 'react-icons/gi';

export const PaymentAccountsSection = () => {
  const sectionHeaderData = data[0];

  return (
    <SectionContainer>
      <PageContainer>
        <SectionsHeader data={sectionHeaderData} />
        <SectionList>
          {payment.map(({ title, amount }) => (
            <SectionItem key={title}>
              <SectionItemLogo>
                <GiTakeMyMoney color="#fff" />
              </SectionItemLogo>
              <SectionItemData>
                <SectionItemDataTitle>{title}</SectionItemDataTitle>
                <SectionItemDataAmount>{amount}</SectionItemDataAmount>
              </SectionItemData>
            </SectionItem>
          ))}
        </SectionList>
      </PageContainer>
    </SectionContainer>
  );
};

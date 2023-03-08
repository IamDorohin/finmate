import {
  SectionContainer,
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './DebtsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { PageContainer } from 'Components/Common/PageContainer.styled';
import data from 'Helpers/sectionsHeaderData.json';
import debts from 'Helpers/debtsData.json';
import { GiTakeMyMoney } from 'react-icons/gi';

export const DebtsSection = () => {
  const sectionHeaderData = data[2];

  return (
    <SectionContainer>
      <PageContainer>
        <SectionsHeader data={sectionHeaderData} />
        <SectionList>
          {debts.map(({ title, amount }) => (
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

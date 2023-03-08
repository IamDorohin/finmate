import {
  SectionContainer,
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './InvestmentsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { PageContainer } from 'Components/Common/PageContainer.styled';
import data from 'Helpers/sectionsHeaderData.json';
import investments from 'Helpers/investmentsData.json';
import { GiTakeMyMoney } from 'react-icons/gi';

export const InvestmentsSection = () => {
  const sectionHeaderData = data[1];

  return (
    <SectionContainer>
      <PageContainer>
        <SectionsHeader data={sectionHeaderData} />
        <SectionList>
          {investments.map(({ title, amount }) => (
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

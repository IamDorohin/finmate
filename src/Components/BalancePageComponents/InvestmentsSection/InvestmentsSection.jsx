import {
  SectionContainer,
  SectionListWrapper,
  SectionList,
  SectionItem,
  SectionItemContent,
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
        <SectionListWrapper>
          <SectionList>
            {investments.map(({ title, amount }) => (
              <SectionItem key={title}>
                <SectionItemContent>
                  <SectionItemLogo>
                    <GiTakeMyMoney color="#fff" size={'100%'} />
                  </SectionItemLogo>
                  <SectionItemData>
                    <SectionItemDataTitle>{title}</SectionItemDataTitle>
                    <SectionItemDataAmount>{amount}</SectionItemDataAmount>
                  </SectionItemData>
                </SectionItemContent>
              </SectionItem>
            ))}
          </SectionList>
        </SectionListWrapper>
      </PageContainer>
    </SectionContainer>
  );
};

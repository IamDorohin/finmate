import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import {
  SectionContainer,
  SectionListWrapper,
  SectionList,
  SectionItem,
  SectionItemLogo,
  // SectionItemLogoChanger,
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
  const [showModal, setShowModal] = useState(false);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <SectionContainer>
      <PageContainer>
        {showModal && <Modal onClose={changeModalStatusHandler}></Modal>}
        <SectionsHeader data={sectionHeaderData} />
        <SectionListWrapper>
          <SectionList>
            {debts.map(({ title, amount }) => (
              <SectionItem key={title} onClick={changeModalStatusHandler}>
                <SectionItemLogo>
                  {/* <SectionItemLogoChanger> */}
                  <GiTakeMyMoney color="#fff" size={'100%'} />
                  {/* </SectionItemLogoChanger> */}
                </SectionItemLogo>
                <SectionItemData>
                  <SectionItemDataTitle>{title}</SectionItemDataTitle>
                  <SectionItemDataAmount>{amount}</SectionItemDataAmount>
                </SectionItemData>
              </SectionItem>
            ))}
          </SectionList>
        </SectionListWrapper>
      </PageContainer>
    </SectionContainer>
  );
};

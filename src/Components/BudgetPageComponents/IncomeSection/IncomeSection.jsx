import { GiTakeMyMoney } from 'react-icons/gi';
import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import data from 'Helpers/sectionsHeaderData.json';
import income from 'Helpers/incomeData.json';
import {
  IncomeSectionContainer,
  SectionListWrapper,
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './IncomeSection.styled';

export const IncomeSection = () => {
  const sectionHeaderData = data[4];
  const [showModal, setShowModal] = useState(false);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <IncomeSectionContainer>
      {showModal && <Modal onClose={changeModalStatusHandler}></Modal>}
      <SectionsHeader data={sectionHeaderData} />
      <SectionListWrapper>
        <SectionList>
          {income.map(({ title, amount }) => (
            <SectionItem key={title} onClick={changeModalStatusHandler}>
              <SectionItemLogo>
                <GiTakeMyMoney color="#fff" size={'100%'} />
              </SectionItemLogo>
              <SectionItemData>
                <SectionItemDataTitle>{title}</SectionItemDataTitle>
                <SectionItemDataAmount>{amount}</SectionItemDataAmount>
              </SectionItemData>
            </SectionItem>
          ))}
        </SectionList>
      </SectionListWrapper>
    </IncomeSectionContainer>
  );
};

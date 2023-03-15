import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { BudgetPageSectionItems } from 'Components/Common/SectionsItems/BudgetPageSectionItems/BudgetPageSectionItems';
import data from 'TestingData/sectionsHeaderData.json';
import income from 'TestingData/incomeData.json';
import {
  IncomeSectionContainer,
  SectionListWrapper,
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
        <BudgetPageSectionItems
          sectionData={income}
          modalStatusHandler={changeModalStatusHandler}
        />
      </SectionListWrapper>
    </IncomeSectionContainer>
  );
};

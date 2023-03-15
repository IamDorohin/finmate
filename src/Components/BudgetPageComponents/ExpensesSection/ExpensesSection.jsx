import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { BudgetPageSectionItems } from 'Components/Common/SectionsItems/BudgetPageSectionItems/BudgetPageSectionItems';
import data from 'TestingData/sectionsHeaderData.json';
import expenses from 'TestingData/expensesData.json';
import {
  ExpensesSectionContainer,
  SectionListWrapper,
} from './ExpensesSection.styled';

export const ExpensesSection = () => {
  const sectionHeaderData = data[3];
  const [showModal, setShowModal] = useState(false);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ExpensesSectionContainer>
      {showModal && <Modal onClose={changeModalStatusHandler}></Modal>}
      <SectionsHeader data={sectionHeaderData} />
      <SectionListWrapper>
        <BudgetPageSectionItems
          sectionData={expenses}
          modalStatusHandler={changeModalStatusHandler}
        />
      </SectionListWrapper>
    </ExpensesSectionContainer>
  );
};

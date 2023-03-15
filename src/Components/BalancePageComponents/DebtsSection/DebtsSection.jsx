import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import { SectionContainer, SectionListWrapper } from './DebtsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { BalancePageSectionItems } from 'Components/Common/SectionsItems/BalancePageSectionItems/BalancePageSectionItems';
import data from 'TestingData/sectionsHeaderData.json';
import debts from 'TestingData/debtsData.json';

export const DebtsSection = () => {
  const sectionHeaderData = data[2];
  const [showModal, setShowModal] = useState(false);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <SectionContainer>
      {showModal && <Modal onClose={changeModalStatusHandler}></Modal>}
      <SectionsHeader data={sectionHeaderData} />
      <SectionListWrapper>
        <BalancePageSectionItems
          sectionData={debts}
          modalStatusHandler={changeModalStatusHandler}
        ></BalancePageSectionItems>
      </SectionListWrapper>
    </SectionContainer>
  );
};

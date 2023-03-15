import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import {
  SectionContainer,
  SectionListWrapper,
} from './InvestmentsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { BalancePageSectionItems } from 'Components/Common/SectionsItems/BalancePageSectionItems/BalancePageSectionItems';
import data from 'TestingData/sectionsHeaderData.json';
import investments from 'TestingData/investmentsData.json';

export const InvestmentsSection = () => {
  const sectionHeaderData = data[1];
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
          sectionData={investments}
          modalStatusHandler={changeModalStatusHandler}
        ></BalancePageSectionItems>
      </SectionListWrapper>
    </SectionContainer>
  );
};

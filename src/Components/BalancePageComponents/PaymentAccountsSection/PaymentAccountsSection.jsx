import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import {
  SectionContainer,
  SectionListWrapper,
} from './PaymentAccountsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import { BalancePageSectionItems } from 'Components/Common/SectionsItems/BalancePageSectionItems/BalancePageSectionItems';
import data from 'TestingData/sectionsHeaderData.json';
import payment from 'TestingData/paymentAccountsData.json';

export const PaymentAccountsSection = () => {
  const sectionHeaderData = data[0];
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
          sectionData={payment}
          modalStatusHandler={changeModalStatusHandler}
        ></BalancePageSectionItems>
      </SectionListWrapper>
    </SectionContainer>
  );
};

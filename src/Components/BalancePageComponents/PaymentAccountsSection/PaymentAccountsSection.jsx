import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import {
  SectionContainer,
  SectionListWrapper,
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './PaymentAccountsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import data from 'Helpers/sectionsHeaderData.json';
import payment from 'Helpers/paymentAccountsData.json';
import { GiTakeMyMoney } from 'react-icons/gi';

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
        <SectionList>
          {payment.map(({ title, amount }) => (
            <SectionItem key={title} onClick={changeModalStatusHandler}>
              <SectionItemLogo>
                {/* <SectionItemLogoChanger> */}
                <GiTakeMyMoney color="#fff" size={'75%'} />
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
    </SectionContainer>
  );
};

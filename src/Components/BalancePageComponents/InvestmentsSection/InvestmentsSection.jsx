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
} from './InvestmentsSection.styled';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import data from 'Helpers/sectionsHeaderData.json';
import investments from 'Helpers/investmentsData.json';
import { GiTakeMyMoney } from 'react-icons/gi';

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
        <SectionList>
          {investments.map(({ title, amount }) => (
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
    </SectionContainer>
  );
};

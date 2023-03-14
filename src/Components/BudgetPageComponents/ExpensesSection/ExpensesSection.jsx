import { GiTakeMyMoney } from 'react-icons/gi';
import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import data from 'Helpers/sectionsHeaderData.json';
import expenses from 'Helpers/expensesData.json';
import {
  ExpensesSectionContainer,
  SectionListWrapper,
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
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
        <SectionList>
          {expenses.map(({ title, amount }) => (
            <SectionItem key={title} onClick={changeModalStatusHandler}>
              <SectionItemLogo>
                <GiTakeMyMoney color="#fff" size={'75%'} />
              </SectionItemLogo>
              <SectionItemData>
                <SectionItemDataTitle>{title}</SectionItemDataTitle>
                <SectionItemDataAmount>{amount}</SectionItemDataAmount>
              </SectionItemData>
            </SectionItem>
          ))}
        </SectionList>
      </SectionListWrapper>
    </ExpensesSectionContainer>
  );
};

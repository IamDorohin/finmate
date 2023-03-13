import { GiTakeMyMoney } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { deviceSelector } from 'Redux/selectors';
import { useState } from 'react';
import { Modal } from 'Components/Common/Modal/Modal';
import { PageContainer } from 'Components/Common/PageContainer.styled';
import { UserContainer } from '../../UserContainer/UserContainer';
import { SectionsHeader } from 'Components/Common/SectionsHeader/SectionsHeader';
import data from 'Helpers/sectionsHeaderData.json';
import expenses from 'Helpers/expensesData.json';
import {
  ExpensesSectionContainer,
  FlexContainer,
  ExpensesSectionWrapper,
  SectionListWrapper,
  SectionList,
  SectionItem,
  SectionItemContent,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './ExpensesSection.styled';

export const ExpensesSection = () => {
  const sectionHeaderData = data[3];
  const smartPhoneDevice = useSelector(deviceSelector);
  const [showModal, setShowModal] = useState(false);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ExpensesSectionContainer>
      <PageContainer>
        {showModal && <Modal onClose={changeModalStatusHandler}></Modal>}
        <FlexContainer>
          <ExpensesSectionWrapper></ExpensesSectionWrapper>
          {!smartPhoneDevice && <UserContainer />}
        </FlexContainer>
        <SectionsHeader data={sectionHeaderData} />
        <SectionListWrapper>
          <SectionList>
            {expenses.map(({ title, amount }) => (
              <SectionItem key={title} onClick={changeModalStatusHandler}>
                <SectionItemContent>
                  <SectionItemLogo>
                    <GiTakeMyMoney color="#fff" size={'100%'} />
                  </SectionItemLogo>
                  <SectionItemData>
                    <SectionItemDataTitle>{title}</SectionItemDataTitle>
                    <SectionItemDataAmount>{amount}</SectionItemDataAmount>
                  </SectionItemData>
                </SectionItemContent>
              </SectionItem>
            ))}
          </SectionList>
        </SectionListWrapper>
      </PageContainer>
    </ExpensesSectionContainer>
  );
};

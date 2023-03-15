import { GiTakeMyMoney } from 'react-icons/gi';
import {
  SectionList,
  SectionItem,
  SectionItemLogo,
  SectionItemData,
  SectionItemDataTitle,
  SectionItemDataAmount,
} from './BalancePageSectionItems.styled';

export const BalancePageSectionItems = ({
  sectionData,
  modalStatusHandler,
}) => {
  return (
    <SectionList>
      {sectionData.map(({ title, amount }) => (
        <SectionItem key={title} onClick={modalStatusHandler}>
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
  );
};

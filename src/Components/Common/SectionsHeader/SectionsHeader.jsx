import { TiPlus } from 'react-icons/ti';

import {
  SectionsHeaderContainer,
  SectionsHeaderAddButton,
  SectionsHeaderDataContainer,
  SectionsHeaderDataTitle,
  SectionsHeaderDataAmount,
} from './SectionsHeader.styled';

export const SectionsHeader = ({ data }) => {
  return (
    <SectionsHeaderContainer>
      <SectionsHeaderAddButton>
        <TiPlus size={14} color={'#fff'} />
      </SectionsHeaderAddButton>
      <SectionsHeaderDataContainer>
        <SectionsHeaderDataTitle>{data.title}</SectionsHeaderDataTitle>
        <SectionsHeaderDataAmount>{data.amount} ₴</SectionsHeaderDataAmount>
      </SectionsHeaderDataContainer>
    </SectionsHeaderContainer>
  );
};

// green
// #124720

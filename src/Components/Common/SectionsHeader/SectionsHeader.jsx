import { TiPlus } from 'react-icons/ti';

import {
  SectionsHeaderContainer,
  SectionsHeaderAddButton,
  SectionsHeaderData,
  SectionsHeaderDataTitle,
  SectionsHeaderDataAmount,
} from './SectionsHeader.styled';

export const SectionsHeader = ({ data }) => {
  return (
    <SectionsHeaderContainer>
      <SectionsHeaderAddButton>
        <TiPlus size={14} color={'#fff'} />
      </SectionsHeaderAddButton>
      <SectionsHeaderData>
        <SectionsHeaderDataTitle>{data.title}</SectionsHeaderDataTitle>
        <SectionsHeaderDataAmount>{data.amount}</SectionsHeaderDataAmount>
      </SectionsHeaderData>
    </SectionsHeaderContainer>
  );
};

// green
// #124720

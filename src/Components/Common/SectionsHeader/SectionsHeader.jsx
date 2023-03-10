import { useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import { Modal } from 'Components/Common/Modal/Modal';
import {
  SectionsHeaderContainer,
  SectionsHeaderAddButton,
  SectionsHeaderDataContainer,
  SectionsHeaderDataTitle,
  SectionsHeaderDataAmount,
} from './SectionsHeader.styled';

export const SectionsHeader = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const changeModalStatusHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <SectionsHeaderContainer>
      {showModal && <Modal onClose={changeModalStatusHandler}></Modal>}
      <SectionsHeaderAddButton onClick={changeModalStatusHandler}>
        <TiPlus size={'75%'} color={'#fff'} />
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

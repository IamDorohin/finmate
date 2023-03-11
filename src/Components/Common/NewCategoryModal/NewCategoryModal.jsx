import {
  NewCategoryModalContainer,
  NewCategoryModalTitle,
} from './NewCategoryModal.styled';

export const NewCategoryModal = ({ title }) => {
  const modalTitle = title.toLowerCase();

  return (
    <NewCategoryModalContainer>
      <NewCategoryModalTitle>Add new {modalTitle}</NewCategoryModalTitle>
    </NewCategoryModalContainer>
  );
};

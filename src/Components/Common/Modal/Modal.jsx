import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  const escCloseModalHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const backdropCloseModalHandler = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escCloseModalHandler);

    return () => {
      window.removeEventListener('keydown', escCloseModalHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <ModalBackdrop onClick={backdropCloseModalHandler}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

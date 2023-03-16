import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deviceSelector } from 'Redux/selectors';
import { VscChromeClose } from 'react-icons/vsc';
import { ModalBackdrop, ModalContent, ModalCloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  const smartPhoneDevice = useSelector(deviceSelector);

  useEffect(() => {
    if (smartPhoneDevice) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  });

  useEffect(() => {
    window.addEventListener('keydown', escCloseModalHandler);

    return () => {
      window.removeEventListener('keydown', escCloseModalHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return createPortal(
    <ModalBackdrop onClick={backdropCloseModalHandler}>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>
          <VscChromeClose size={'100%'} />
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

import { FiLogOut } from 'react-icons/fi';
import { LogoutContainer, LogoutButtonWrapper } from './LogoutButton.styled';

export const LogoutButton = () => {
  return (
    <LogoutContainer>
      <LogoutButtonWrapper>
        <FiLogOut size={'100%'} />
      </LogoutButtonWrapper>
    </LogoutContainer>
  );
};

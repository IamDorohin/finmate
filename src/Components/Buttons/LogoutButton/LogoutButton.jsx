import { FiLogOut } from 'react-icons/fi';
import { LogoutButtonEl } from './LogoutButton.styled';

export const LogoutButton = () => {
  return (
    <LogoutButtonEl>
      <FiLogOut size={16} />
    </LogoutButtonEl>
  );
};

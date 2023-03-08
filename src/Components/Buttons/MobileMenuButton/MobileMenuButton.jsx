import { MobileMenuButtonEl } from './MobileMenuButton.styled';

export const MobileMenuButton = ({ children, onClick }) => {
  return (
    <MobileMenuButtonEl type="button" onClick={onClick}>
      {children}
    </MobileMenuButtonEl>
  );
};

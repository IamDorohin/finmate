import { SettingsButtonContainer } from './SettingsButton.styled';
import { FiSettings } from 'react-icons/fi';

export const SettingsButton = ({ onClick }) => {
  return (
    <SettingsButtonContainer type="button" onClick={onClick}>
      <FiSettings size={'100%'} />
    </SettingsButtonContainer>
  );
};

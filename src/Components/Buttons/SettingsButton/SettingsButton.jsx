import { SettingsButtonEl } from './SettingsButton.styled';
import { FiSettings } from 'react-icons/fi';

export const SettingsButton = ({ onClick }) => {
  return (
    <SettingsButtonEl type="button" onClick={onClick}>
      <FiSettings size={16} />
    </SettingsButtonEl>
  );
};

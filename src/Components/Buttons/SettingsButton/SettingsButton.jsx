import {
  SettingsButtonContainer,
  SettingsButtonLogo,
} from './SettingsButton.styled';
import { FiSettings } from 'react-icons/fi';

export const SettingsButton = ({ onClick }) => {
  const activationAnimation = true;

  return (
    <SettingsButtonContainer type="button" onClick={onClick}>
      <SettingsButtonLogo click={activationAnimation}>
        <FiSettings />
      </SettingsButtonLogo>
    </SettingsButtonContainer>
  );
};

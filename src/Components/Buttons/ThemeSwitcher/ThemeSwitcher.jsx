import { useSelector } from 'react-redux';
import { FiMoon, FiSun } from 'react-icons/fi';
// import { RxDotFilled } from 'react-icons/rx';
import { WiStars } from 'react-icons/wi';
import {
  ThemeSwitcherContainer,
  ThemeSwitcherStars,
  ThemeSwitcherButton,
} from './ThemeSwitcher.styled';

export const ThemeSwitcher = ({ onClick }) => {
  const currentAppTheme = useSelector(state => state.theme);
  const isLightTheme = currentAppTheme === 'light';

  return (
    <ThemeSwitcherContainer onClick={onClick}>
      <ThemeSwitcherStars theme={currentAppTheme}>
        <WiStars size={20} />
      </ThemeSwitcherStars>
      <ThemeSwitcherButton type="button" theme={currentAppTheme}>
        {isLightTheme ? (
          <FiMoon size={16} color="#0cc9eb" />
        ) : (
          <FiSun size={16} color="#fac507" />
        )}
      </ThemeSwitcherButton>
    </ThemeSwitcherContainer>
  );
};

// FiMoon
// FiSun

import { useSelector } from 'react-redux';
import { FiMoon, FiSun } from 'react-icons/fi';
// import { RxDotFilled } from 'react-icons/rx';
import { WiStars } from 'react-icons/wi';
import {
  ThemeSwitcherContainer,
  ThemeSwitcherStars,
  ThemeSwitcherButton,
  ThemeSwitcherSunButton,
  ThemeSwitcherMoonButton,
} from './ThemeSwitcher.styled';
import { themeSelector } from 'Redux/selectors';

export const ThemeSwitcher = ({ onClick }) => {
  const currentAppTheme = useSelector(themeSelector);

  const isLightTheme = currentAppTheme === 'light';

  return (
    <ThemeSwitcherContainer onClick={onClick}>
      <ThemeSwitcherStars theme={currentAppTheme}>
        <WiStars size={'100%'} />
      </ThemeSwitcherStars>
      <ThemeSwitcherButton type="button" theme={currentAppTheme}>
        {isLightTheme ? (
          <ThemeSwitcherMoonButton>
            <FiSun size={12} color="#fac507" />
          </ThemeSwitcherMoonButton>
        ) : (
          <ThemeSwitcherSunButton>
            <FiMoon size={12} color="#0cc9eb" />
          </ThemeSwitcherSunButton>
        )}
      </ThemeSwitcherButton>
    </ThemeSwitcherContainer>
  );
};

// FiMoon
// FiSun

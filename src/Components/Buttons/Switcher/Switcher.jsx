import { useDispatch, useSelector } from 'react-redux';
import { changeAppTheme } from 'Redux/Theme/Slice';
import { FiMoon, FiSun } from 'react-icons/fi';
import { themeSelector } from 'Redux/selectors';
import { SwitcherWrapper } from './Switcher.styled';

export const Switcher = () => {
  const currentAppTheme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const isLightTheme = currentAppTheme === 'light';

  const themeChangeHandler = () => {
    if (currentAppTheme === 'light') {
      dispatch(changeAppTheme({ value: 'dark' }));
    } else {
      dispatch(changeAppTheme({ value: 'light' }));
    }
  };

  console.log(currentAppTheme);
  return (
    <SwitcherWrapper
      onClick={() => themeChangeHandler()}
      theme={currentAppTheme}
    >
      {isLightTheme ? <FiSun /> : <FiMoon />}
    </SwitcherWrapper>
  );
};

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { themeSelector } from 'Redux/selectors';
import { changeDeviceType } from 'Redux/Device/slice';
import { BalancePage } from 'Pages/BalancePage/BalancePage';
import { BudgetPage } from 'Pages/BudgetPage/BudgetPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'Theme/theme';
import './App.css';

export const App = () => {
  const currentAppTheme = useSelector(themeSelector);
  const dispatch = useDispatch();

  let theme;

  const themeChanging = () => {
    if (currentAppTheme === 'light') {
      theme = lightTheme;
      document.body.style.backgroundColor = '#ffffff';
    } else {
      theme = darkTheme;
      document.body.style.backgroundColor = '#232b47';
    }
  };

  themeChanging();

  useEffect(() => {
    if (window.innerWidth < 479) {
      dispatch(changeDeviceType(true));
    }

    window.matchMedia('(min-width: 480px)').addEventListener('change', e => {
      if (e.matches) {
        dispatch(changeDeviceType(false));
      } else {
        dispatch(changeDeviceType(true));
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/balance" element={<BalancePage />}></Route>
          <Route path="/budget" element={<BudgetPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

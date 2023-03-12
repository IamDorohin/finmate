import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeDeviceType } from 'Redux/Device/slice';
import { BalancePage } from 'Pages/BalancePage/BalancePage';
import { BudgetPage } from 'Pages/BudgetPage/BudgetPage';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/budget" element={<BudgetPage />}></Route>
      </Route>
    </Routes>
  );
};

import { Outlet } from 'react-router-dom';
import { AppBar } from 'Components/AppBar/AppBar';
// import { PageContainer } from 'Components/Common/PageContainer/PageContainer';

export const Layout = () => {
  return (
    // <PageContainer>
    <>
      <AppBar />
      <Outlet />
    </>

    // </PageContainer>
  );
};

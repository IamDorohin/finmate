import { Outlet } from 'react-router-dom';
import { AppBar } from 'Components/AppBar/AppBar';
import { Footer } from 'Components/Footer/Footer';
// import { PageContainer } from 'Components/Common/PageContainer/PageContainer';

export const Layout = () => {
  return (
    // <PageContainer>
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

    // </PageContainer>
  );
};

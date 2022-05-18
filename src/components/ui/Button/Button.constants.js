// pages
// components - звичайні компоненти
// layouts - загальні шаблони
// services - api requests layer

const Header = () => {};
const Footer = () => {};

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const ErrorLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

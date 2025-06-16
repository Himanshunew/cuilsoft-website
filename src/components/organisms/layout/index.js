import Footer from "../footer";
import { MainHeader } from "../main-header";

const Layout = ({ children, title }) => {
  return (
    <>
      <MainHeader title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

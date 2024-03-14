import Footer from "./Footer";
import Navmenu from "./Navmenu";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
const RootLayout = () => {
  return (
    <>
      <ScrollToTop smooth />
      <TopHeader />
      <Navmenu />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;

import "./home.css";
import Banner from "../../components/Banner";
import Umrahpackage from "../../components/Umrahpackage";
import HolidayPackage from "../../components/HolidayPackage";
import VisaProcessing from "../../components/VisaProcessing";
import Hajjpackage from "../../components/Hajjpackage";
import About from "../../components/About";
import WhyUs from "../../components/WhyUs";
import HomeContact from "../../components/HomeContact";
const Home = () => {
  return (
    <div className="subscribe__img">
      <Banner />
      <Umrahpackage />
      <HolidayPackage />
      <VisaProcessing />
      <Hajjpackage />
      <About />
      <WhyUs />
      <HomeContact />
    </div>
  );
};

export default Home;

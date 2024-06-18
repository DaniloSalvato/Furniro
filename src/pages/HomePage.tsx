import Carrousel from "../components/HomeComponents/Carrousel";
import Discover from "../components/HomeComponents/Discover";
import OurProducts from "../components/HomeComponents/OurProducts";
import Share from "../components/HomeComponents/Share";
import TheRange from "../components/HomeComponents/TheRange";

const HomePage = () => {
  return (
    <>
      <Discover />
      <TheRange />
      <OurProducts />
      <Carrousel />
      <Share />
    </>
  );
};

export default HomePage;

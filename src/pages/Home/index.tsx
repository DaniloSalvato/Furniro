
import Carrousel from "./Components/Carrousel";
import Discover from "./Components/Discover";
import OurProducts from "./Components/OurProducts";
import Share from "./Components/Share";
import TheRange from "./Components/TheRange";

const HomePage = () => {

  return (
    <main>
      <Discover />
      <TheRange />
      <OurProducts />
      <Carrousel />
      <Share />
    </main>
  );
};

export default HomePage;

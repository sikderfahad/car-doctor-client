import { Helmet } from "react-helmet";
import AboutUs from "./aboutUs/AboutUs";
import Contact from "./contact/Contact";
import CoreFeatures from "./coreFeatures/CoreFeatures";
import HeroSlider from "./heroSlider/HeroSlider";
import OurTeam from "./meetOurTeam/OurTeam";
import PopularProducts from "./popularProducts/popularProducts";
import ServiceArea from "./serviceArea/ServiceArea";
import TestimonialCarousel from "./testimonialCarousel/TestimonialCarousel";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Car doctor | Home</title>
      </Helmet>
      <HeroSlider />
      <AboutUs />
      <ServiceArea />
      <Contact />
      <PopularProducts />
      <OurTeam />
      <CoreFeatures />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;

import HeroSection from "../components/home/HeroSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import TrendingProducts from "../components/home/TrendingProducts";
import BestSellers from "../components/home/BestSellers";
import PromoBanner from "../components/home/PromoBanner";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />

      <FeaturedCategories />

      <TrendingProducts />

      <PromoBanner />

      <BestSellers />

      <Testimonials />

      <Newsletter />
    </>
  );
};

export default Home;
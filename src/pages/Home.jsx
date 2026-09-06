import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
import Categories from "../components/home/Categories";
import BrandSection from "../components/home/BrandSection";
import AboutSection from "../components/home/AboutSection";
import InstagramSection from "../components/home/InstagramSection";

function Home() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <Categories />
      <BrandSection />
      <AboutSection />
      <InstagramSection />
    </>
  );
}

export default Home;
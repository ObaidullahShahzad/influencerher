// import AboutUs from "./components/about-us";
import CreatorOutreach from "./components/creater";
import EcosystemComponent from "./components/ecosystem";
import FAQSection from "./components/faq";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import MarketingFunnels from "./components/marketing";
import TokenUtility from "./components/token";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <EcosystemComponent />
      {/* <AboutUs /> */}
      <MarketingFunnels />
      <CreatorOutreach />
      <TokenUtility />
      <FAQSection />

      <Footer />
    </div>
  );
}

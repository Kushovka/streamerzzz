import Footer from "./section/Footer";
import HeroSection from "./section/HeroSection";
import HowItWorks from "./section/HowItWorks";
import KeyFeatures from "./section/KeyFeatures";
import Navbar from "./section/Navbar";
import PricingPlans from "./section/PricingPlans";
import Testimonials from "./section/Testimonials";

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Home/Hero";
import Services from "./Components/Service/Services";
import ContactBox from "./Components/Contact/ContactBox";
import Footer from "./Components/Contact/Footer";
import About from "./Components/About/About";
import Tech from "./Components/Technologies/Technologies";
import WebDesignFeatures from "./Components/Features/Features";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WebDesignFeatures/>
      <About />
      <Tech />
      <Services />
      <ContactBox />
      <Footer />
    </>
  );
}

export default App;

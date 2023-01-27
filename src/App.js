import "./App.css";
import Contact from "./contact/Contact";
import Gift from "./gifts/Gift";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import ProductSection from "./Product_Section/Product_Section";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductSection />
      <Gift />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Contact from "./contact/Contact";
import Gift from "./gifts/Gift";
import Hero from "./Hero/Hero";

import ProductSection from "./Product_Section/Product_Section";
import Footer from "./Footer/Footer";
import NavBar from "./navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ProductSection />
      <Gift />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

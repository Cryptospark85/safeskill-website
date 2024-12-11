import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import NavBanner from "./components/Navbar/NavBanner";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import Subjects from "./components/Subjects/Subjects";
import WhyChoose from "./components/WhyChooose/WhyChooose";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PopiAct from "./pages/PopiAct";
import Pricing from './pages/Pricing';


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <NavBanner />
                <Hero />
                <NumberCounter />
                <WhyChoose />
                <Subjects />
                <Testimonials />
                <Footer />
              </>
            }
          />
          {/* About Us Page */}
          <Route path="/about" element={<AboutUs />} />
          {/* Contact Us Page */}
          <Route path="/contact" element={<ContactUs />} />
          {/* POPI Act Page */}
          <Route path="/popiact" element={<PopiAct />} />
          {/* Pricing Page */}
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

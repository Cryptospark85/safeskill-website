import React, { useState, useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
  });

  // Animate counters
  useEffect(() => {
    let interval = setInterval(() => {
      setCounters((prev) => ({
        projects: Math.min(prev.projects + 100, 10000),
        clients: Math.min(prev.clients + 25, 2500),
        awards: Math.min(prev.awards + 1, 24),
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Toggle FAQ answers
  const [faq, setFaq] = useState({ 1: false, 2: false, 3: false });

  const toggleFaq = (id) => {
    setFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="aboutContainer">
      <div className="background-animation">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to <span className="highlight">Safeskill</span>. We are
          dedicated to delivering top-notch online safety training tailored to your needs. 
          Our team is passionate about innovation, customer satisfaction, and
          creating impactful solutions.
        </p>

        <div className="counters">
          <div className="counter">
            <h2>{counters.projects}+</h2>
            <p>Course Hours Completed</p>
          </div>
          <div className="counter">
            <h2>{counters.clients}+</h2>
            <p>Active Students</p>
          </div>
          <div className="counter">
            <h2>{counters.awards}+</h2>
            <p>Active courses</p>
          </div>
        </div>

        <h2 className="faq-title">FAQs</h2>
        <div className="faq">
          <div
            className={`faq-item ${faq[1] ? "open" : ""}`}
            onClick={() => toggleFaq(1)}
          >
            <h3>What services do you offer?</h3>
            {faq[1] && <p>At Safeskill, we provide engaging and captivating online safety training solutions designed to enhance workplace safety and ensure compliance with industry standards. Our interactive programs include certifications, real-world scenarios, and data-driven insights, empowering businesses to foster a culture of safety while meeting regulatory requirements efficiently.</p>}
          </div>
          <div
            className={`faq-item ${faq[2] ? "open" : ""}`}
            onClick={() => toggleFaq(2)}
          >
            <h3>How can I contact your team?</h3>
            {faq[2] && <p>You can reach us via email, phone, or our interactive contact form available on the website.</p>}
          </div>
          <div
            className={`faq-item ${faq[3] ? "open" : ""}`}
            onClick={() => toggleFaq(3)}
          >
            <h3>What industries do you specialize in?</h3>
            {faq[3] && <p>We specialize in industries such as mining, construction, machining, and fabrication, providing tailored safety training solutions that meet the unique challenges of each sector. Our programs are designed to improve compliance, reduce risks, and ensure the safety and productivity of your workforce.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import SafeskillLogo from "../../assets/Safeskill_logo.png";
import "./Footer.css"; // Ensure this contains the animation styles (from starsec)

const Footer = () => {
  return (
    <div className="footer-container rounded-t-3xl relative">
      {/* Adding a grey tint to the background */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-t-3xl"></div>
      <div className="relative">
        {/* Star animation background */}
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>

        {/* Footer content */}
        <div className="container text-white py-10 text-center">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <img
              src={SafeskillLogo}
              alt="Safeskill Logo"
              className="max-h-16 w-auto object-contain"
            />
          </div>

          {/* Footer Description */}
          <div className="text-lg">
            <p>
              Empowering industries with certified online safety training.
              Dedicated to making your workplace safer and compliant with the
              latest standards.
            </p>
          </div>

          {/* Copyright Section */}
          <div className="mt-8">
            <span className="text-sm opacity-80">
              &copy; 2024 SafeSkill (Pty) Ltd. All rights reserved. Powered By Sable Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

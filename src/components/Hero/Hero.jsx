import React from "react";
import HeroImage from "../../assets/hero.png"; // Keeping hero.png as requested

const Hero = () => {
  return (
    <section className="relative">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="starsec"></div> {/* Replace with star animation */}
      </div>

      {/* Tint below the slider */}
      <div className="absolute inset-0 -z-10 bg-black/50"></div> {/* Semi-transparent overlay */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Content Section */}
        <div className="px-8 md:px-16 lg:px-24 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white">
            Find Your Perfect{" "}
            <span style={{ color: "#FF0000" }}>Course</span>
          </h1>
          <p className="text-gray-300 text-lg">
            We have the perfect course for your needs. Flexible, private, and
            tailored just for you.
          </p>
          <div className="flex gap-4">
            <a
              href="https://sable-schools.vercel.app/complete-profile" // Updated link for Get Started
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700"
            >
              Get Started
            </a>
            <a
              href="https://www.youtube.com" // Updated link for See how it works
              className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 flex items-center"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

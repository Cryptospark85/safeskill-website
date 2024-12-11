import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = ({ title, subtitle, link, tag }) => {
  return (
    <div className="bg-stone-700 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner Text section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Tagline and Title */}
            <div className="flex flex-col text-center md:text-left space-y-4 lg:max-w-[500px]">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="text-xl text-red-600 font-semibold capitalize font-playfair"
              >
                {tag}
              </motion.p>
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="text-xl lg:text-2xl font-semibold capitalize font-playfair"
              >
                {title}
              </motion.p>
            </div>
            {/* Subtitle */}
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-sm text-white lg:max-w-[500px]"
            >
              {subtitle}
            </motion.p>
            {/* Button */}
            <motion.div
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button
                className="primary-btn !mt-5"
                onClick={() =>
                  (window.location.href = "https://sable-schools.vercel.app/complete-profile")
                }
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

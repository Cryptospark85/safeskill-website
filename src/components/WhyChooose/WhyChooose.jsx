import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { BiBrain } from 'react-icons/bi';


const EquipmentData = [
  {
    id: 1,
    title: "Flexible Teaching",
    desc: "With our online learning platform, you can complete your courses anytime, anywhere..",
    icon: <GrYoga />,
    bgColor: "#ff0000",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Knowledge is power",
    desc: "Lift your knowledge around the clock. We're always here",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#1c1c1c",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Courses",
    desc: "Our digital courses provide interactive teaching that keeps learners actively engaged. Through videos, quizzes, and responsive feedback, we ensure that learning is both effective and enjoyable, catering to different learning styles and keeping motivation high. ",
    link: "/",
    icon: <BiBrain />,
    bgColor: "#FF0000",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Experience quality learning without the hefty price tag. Our courses combine expert knowledge and engaging content, all at a cost that fits comfortably within your budget. Learn, grow, and achieve your goals without breaking the bank.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#1c1c1c",
    delay: 0.9,
  },
];

const WhyChoose = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-red-600">
            Why Choose us
          </h1>
          <p className="font-semibold text-3xl ">
            Benefits of online tutoring services with us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          {EquipmentData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(255,0,0,0.5)]" // Hover glow effect added
              >
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

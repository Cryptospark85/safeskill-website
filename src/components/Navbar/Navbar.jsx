import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import SafeskillLogo from "../../assets/Safeskill_logo.png"; // Updated relative path

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav style={{ backgroundColor: "#171717" }}> {/* Hex code for blue background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-6"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img
              src={SafeskillLogo}
              alt="Safeskill Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className={`inline-block text-sm xl:text-base py-2 px-4 font-semibold 
                      text-white bg-white-500 
                      rounded-full 
                      transition-all duration-300 
                      hover:shadow-[0_0_10px_#FF0000]
                    `}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-6">
            {/* Sign In Button */}
            <button
              className="text-black bg-white hover:shadow-[0_0_10px_#FF0000] font-semibold rounded-full px-6 py-2 hidden lg:block"
              onClick={() => {
                window.location.href = "https://sable-schools.vercel.app/sign-in";
              }}
            >
              Sign in
            </button>

            {/* Register Button */}
            <button
              className="text-white bg-red-600 hover:shadow-[0_0_10px_#FF0000] font-semibold rounded-full px-6 py-2 hidden lg:block"
              onClick={() => {
                window.location.href =
                  "https://sable-schools.vercel.app/complete-profile";
              }}
            >
              Register
            </button>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;

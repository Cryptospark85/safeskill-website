import React from "react";
import { motion } from "framer-motion";

const NavBanner = () => {
  const [open, setOpen] = React.useState(true);
  return (
    open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="bg-red-500 text-sm text-center font-semibold p-1 hidden lg:block relative"

      >
        Boost your skills with our online trade and safety courses. Sign up or book a consultation today
        <a href="#" className="text-white ml-2">
         
        
          Talk to us //to add link to contact page
        </a>
        <div
          onClick={() => setOpen(false)}
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavBanner;

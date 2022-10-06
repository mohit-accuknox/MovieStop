import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const childVariant = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <div>
      <motion.section className="flex justify-between items-center bg-[#181818] p-5 z-11 md:w-full md:justify-around xl:p-4">
        <div className="w-full flex justify-start items-center">
          <Link to="/">
            <h2 className="font-Montserrat font-bold md:w-full text-slate-50 flex justify-center items-center gap-3 text-xl">
              <motion.img
                initial={{ opacity: 0, width: "0" }}
                animate={{ opacity: 1, rotate: 360, width: "40px" }}
                transition={{ duration: 1 }}
                src="/images/HeaderLogo.svg"
                alt="logo"
              />
              MovieStop
            </h2>
          </Link>
        </div>
        <motion.ul
          variants={childVariant}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ x: 400, opacity: 0, transition: { duration: 0.2 } }}
          className="menuList flex justify-around items-center flex-row w-[100%] fixed bottom-0 left-0 gap-5 right-0 bg-[#181818] p-5 text-slate-50 z-30 mt-3 transition ease-in duration-500
              sm:static sm:top-0 sm:flex-row sm:bg-transparent sm:gap-10 sm:justify-end"
        >
          <NavLink to="/">
            {" "}
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="movies">
            <li className="cursor-pointer">Movies</li>
          </NavLink>
          <NavLink to="bookmark">
            <li className="cursor-pointer">Bookmark</li>
          </NavLink>
        </motion.ul>
      </motion.section>
    </div>
  );
};

export default Header;

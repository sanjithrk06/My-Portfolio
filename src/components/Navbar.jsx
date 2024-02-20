import React, { useState, useEffect } from "react";
import { useWindowSize } from 'react-use';
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "../constants";
import { menu, close } from "../index";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { width } = useWindowSize();

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        { (width < 1000) ? (
            <NavbarMobile />
            ) : (
                isScrolling ? (
                <NavbarScroll isScrolling={isScrolling} />
                ) : (
                <NavbarFixed />
                )
            )
        }
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
    const [active, setActive] = useState("");

  return (
    <nav className="relative z-10 flex w-full justify-center items-center px-8 py-2 top-4">

      <ul className="flex items-center p-2 justify-center text-[#689775]  bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        {navLinks.map((nav) => (
        <li
            key={nav.id}
            className={`px-2 text-sm font-medium hover:text-[#fb442c] ${
                active === nav.title ? "text-[#fb442c]" : "text-[#689775]"
                }`}
            onClick={() => setActive(nav.title)}
        >
            <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
        ))}
      </ul>

    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  const [active, setActive] = useState("");

  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-5 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500"
    >
      <ul className="flex items-center">
        {navLinks.map((nav) => (
        <li
            key={nav.id}
            className={`px-2 text-[#689775] hover:text-[#fb442c] text-sm font-medium ${
                active === nav.title ? "text-[#fb442c]" : "text-[#689775]"
                }`}
            onClick={() => setActive(nav.title)}
        >
            <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
        ))}
      </ul>
    </motion.nav>
  );
}

function NavbarMobile() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <nav
        className={`fixed z-10 flex justify-between py-2 rounded-md ts-bg right-[8%] ${
            isScrolled ? "top-5" : "top-8"
          } bg-[#000] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 `}
      >
            <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
            />

            <div
            className={`${
                !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#000000ca] bg-clip-padding backdrop-filter backdrop-blur-[20px] bg-opacity-5 border border-gray-50`}
            >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                    {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                        }`}
                        onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                        }}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                    ))}
                </ul>
            </div>
      </nav>
    );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
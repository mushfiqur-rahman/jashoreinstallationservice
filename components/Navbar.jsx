import React, { useState, useEffect } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);
  const [linkColor, setlinkColor] = useState("#1f2937");

  // For Mobile nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Change Nav color
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white dark:bg-black/50"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer ">
        <Link href="/">
          <div className="text-3xl font-serif dark:text-green-500">
            <Image src={}/>
          </div>
        </Link>

        <div className="flex justify-between items-center">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex "
            role="menu"
            aria-label="My Account"
          >
            <li
              className="ml-10 font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/" role="menuitem">
                Home
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/#about" role="menuitem">
                About
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/#skills" role="menuitem">
                Skills
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/#project" role="menuitem">
                Project
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/#edu&exp" role="menuitem">
                Edu&Exp
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-green-500"
              role="none"
            >
              <Link href="/contact" role="menuitem">
                Contact
              </Link>
            </li>
          </ul>
          <div className="p-4">{renderThemeChanger()}</div>
          <div onClick={handleNav} className="md:hidden dark:text-white">
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white dark:bg-black/50"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between cursor-pointer">
              <Link href="/">
                <div className="text-3xl font-serif dark:text-green-500">
                  <h2>Mushfiq</h2>
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-black/30 text-white"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="py-4 flex flex-col cursor-pointer">
              <ul
                className="uppercase"
                style={{ color: `${linkColor}` }}
                role="menu"
                aria-label="My Account"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/" role="menuitem">
                    Home
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/#about" role="menuitem">
                    About
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/#skills" role="menuitem">
                    Skills
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/#project" role="menuitem">
                    Project
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/#edu&exp" role="menuitem">
                    Edu&Exp
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-4 font-bold hover:border-b dark:text-green-500"
                  role="none"
                >
                  <Link href="/contact" role="menuitem">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { HERO_CONTENT, NAVBAR_CONTENTS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* left */}
        <a href="#" className="cursor-pointer">
          <img src={logo} alt="logo" width={120} height={24} />
        </a>
        {/* center */}
        <div className="hidden md:flex space-x-6 tracking-wider">
          {NAVBAR_CONTENTS.map((NAVBAR_CONTENT) => (
            <a
              key={NAVBAR_CONTENT.id}
              href={NAVBAR_CONTENT.href}
              className="hover:text-neutral-200 transition-colors duration-300"
            >
              {NAVBAR_CONTENT.name}
            </a>
          ))}
        </div>

        {/* right */}
        <div className="hidden md:flex space-x-4 items-center ">
          <a
            href="#"
            className="hover:text-neutral-200 transition-colors duration-300 tracking-wide"
          >
            Login
          </a>
          <a
            href="#"
            className="border border-gray-500 hover:border-gray-300 text-white py-2 px-4 rounded-lg hover:bg-neutral-800 transition-colors duration-300"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:text-black hover:bg-blue-50 transition-colors duration-300"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
        </div>

        {/* hamburger menu */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* mobile */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            {NAVBAR_CONTENTS.map((NAVBAR_CONTENT) => (
              <a
                href={NAVBAR_CONTENT.href}
                key={NAVBAR_CONTENT.id}
                className="hover:text-neutral-100 transition-colors duration-300"
              >
                {NAVBAR_CONTENT.name}
              </a>
            ))}
            <a href="#" className="hover:text-white">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors duration-300"
            >
              {HERO_CONTENT.callToAction.secondary}
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:text-black hover:bg-blue-50 transition-colors duration-300"
            >
              {HERO_CONTENT.callToAction.primary}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

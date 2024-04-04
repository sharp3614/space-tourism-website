import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import { NavLink } from "react-router-dom";
import { mainNav } from "../data/navbar";
import classNames from "classnames";
import React from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="w-full flex md:m-8  justify-between z-50 top-0 fixed">
      <img src={logo} className="size-12 mt-8 ml-8" alt="logo" />
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex mr-8 mt-8 md:hidden"
        >
          <img src={hamburgerIcon} alt="..." />
        </button>
      )}
      <nav
        className={`${
          !isOpen && "hidden"
        } md:flex items-center w-[254px] md:w-[830px] h-screen md:h-[96px] bg-white/5 backdrop-blur-xl`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 mb-12 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-8"
            width="19.9"
            height="19.9"
          >
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </button>
        <div className="flex h-full flex-col md:flex-row text-white ml-8 gap-4">
          {mainNav.map((nav, index) => (
            <NavLink to={nav.href} key={index + nav.title}>
              {({ isActive }) => (
                <div
                  className={classNames(
                    "max-sm:border-r-4 md:border-b-4 border-transparent flex items-center h-full hover:border-[#979797]",
                    {
                      "border-white": isActive,
                    }
                  )}
                >
                  {nav.title}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

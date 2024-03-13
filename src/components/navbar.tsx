import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import { NavLink } from "react-router-dom";
import { mainNav } from "../data/navbar";
import classNames from "classnames";
const Navbar = () => {
  return (
    <div className="w-full h-[96px] flex m-8 items-center justify-between z-50 fixed">
      <img src={logo} className="w-12 h-12 " alt="logo" />
      <button className="flex md:hidden">
        <img src={hamburgerIcon} alt="" />
      </button>
      <nav className="hidden md:flex items-center w-[830px] md:h-[96px] bg-white/5 backdrop-blur-xl">
        <div className="flex h-full flex-col md:flex-row text-white ml-8 gap-4">
          {mainNav.map((nav, index) => (
            <NavLink to={nav.href} key={index + nav.title}>
              {({ isActive }) => (
                <div
                  className={classNames(
                    "border-b-4 border-transparent flex items-center h-full hover:border-[#979797]",
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

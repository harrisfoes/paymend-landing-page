import logo from "../../assets/logo.svg";
import close from "../../assets/close-2.svg";
import { useState } from "react";

const Logo = () => {
  return (
    <>
      <div>
        <img src={logo} alt="site logo" />
      </div>
    </>
  );
};

const BurgerMenu = ({ openMobileMenu }) => {
  const handleClick = (event) => {
    console.log(event.target.checked);
    openMobileMenu(true);
  };

  return (
    <label className="flex flex-col justify-center gap-2 cursor-pointer md:hidden">
      <div className="w-10 h-1 bg-white"></div>
      <div className="w-10 h-1 bg-white"></div>
      <input type="checkbox" className="hidden" onChange={handleClick} />
    </label>
  );
};

const CloseMenu = ({ closeMobileMenu }) => {
  const handleClick = (event) => {
    console.log(event.target.checked);
    closeMobileMenu(false);
  };

  return (
    <label className="flex flex-col justify-center gap-2 cursor-pointer">
      <img src={close} alt="close button" className="w-[38px] fill-white" />
      <input type="checkbox" className="hidden" onChange={handleClick} />
    </label>
  );
};

const NavLinks = ({ name, href }) => {
  return (
    <div>
      <a href={href}>{name}</a>
    </div>
  );
};

const MobileMenu = ({ closeMobileMenu, links }) => {
  return (
    <div className="h-screen w-screen bg-black z-10 fixed top-0 transition-all duration-150 ease-in md:hidden">
      <div className="px-6 py-8 flex justify-between">
        <Logo />
        <CloseMenu closeMobileMenu={closeMobileMenu} />
      </div>
      <ul className="text-lightpurp">
        {links.map((linkItems) => {
          return (
            <li
              key={linkItems.name}
              className="p-2 m-4 w-80 text-lg font-poppins font-medium rounded-sm active:bg-lightpurp active:text-black"
            >
              <NavLinks name={linkItems.name} href={linkItems.href} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Help", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About us", href: "#" },
    { name: "Login", href: "#" },
    { name: "Sign Up", href: "#" },
  ];

  return (
    <header className="w-full">
      <div className="px-6 lg:px-16 py-8 flex justify-between items-center">
        <Logo />
        <div className="hidden md:block">
          <ul className="flex gap-8 lg:text-2xl lg:font-medium lg:gap-20">
            {navLinks.slice(0, -2).map((linkItems) => {
              return (
                <li key={linkItems.name}>
                  <NavLinks name={linkItems.name} href={linkItems.href} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:block font-bold">
          <button className="bg-lightpurp text-black rounded-xl m-2 my-6 px-8 lg:w-40 lg:text-xl h-14 hover:text-lightpurp hover:bg-darkblue active:text-black active:bg-lightpurp">
            Login
          </button>
          <button className="bg-lightpurp text-black rounded-xl m-2 my-6 px-8 lg:w-40 lg:text-xl h-14 hover:text-lightpurp hover:bg-darkblue active:text-black active:bg-lightpurp">
            Sign Up
          </button>
        </div>
        <BurgerMenu openMobileMenu={setIsMobileMenuOpen} />
      </div>
      {isMobileMenuOpen ? (
        <MobileMenu closeMobileMenu={setIsMobileMenuOpen} links={navLinks} />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;

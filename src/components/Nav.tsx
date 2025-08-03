import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <header className=" px-12 sm:px-24 py-10 w-full mx-auto absolute">
      <nav className="flex justify-between items-center flex-nowrap max-w-[1024px] mx-auto">
        <a href="/">
          <img
            className="hover:shadow-xl "
            src={headerLogo}
            width={200}
            height={220}
          />
        </a>
        <ul className="flex justify-between md:gap-10 gap-5 max-xl:hidden  items-center list-none xl:w-[500px] w-[430px]">
          {navLinks.map((items) => (
            <li key={items.href}>
              <a
                href={items.href}
                className="text-gray-600 font-bold hover:shadow-xl text-xl"
              >
                {items.label}
              </a>
            </li>
          ))}{" "}
        </ul>
        <div className="xl:hidden relative ">
          <p
            className=" cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          >
            {" "}
            <img src={hamburger} alt="menu" width={40} height={40} />
          </p>
          <div className="">
            {toggle && (
              <div className="flex flex-col space-y-3 justify-center left-1/2 transform -translate-x-1/2 items-center absolute top-16 shadow-xl py-5 px-6 rounded-2xl  ">
                <ul className="flex flex-col justify-between gap-5  items-center list-none ">
                  {navLinks.map((items) => (
                    <li
                      key={items.href}
                      onClick={() => setToggle((prev) => !prev)}
                    >
                      <a
                        href={items.href}
                        className="text-gray-600 hover:text-xl  font-bold hover:shadow-xl text-xl"
                      >
                        {items.label}
                      </a>
                    </li>
                  ))}{" "}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className=" px-12 sm:px-24 py-10 w-full mx-auto absolute">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img
            className="hover:shadow-xl "
            src={headerLogo}
            width={200}
            height={220}
          />
        </a>
        <ul className="flex justify-between gap-16  items-center list-none w-[700px]">
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
      </nav>
    </header>
  );
};

export default Nav;

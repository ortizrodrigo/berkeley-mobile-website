import { Link } from "react-router";
import logo from "../../public/logo.svg";

function Header() {
  return (
    <div className="relative md:fixed top-0 left-0 w-full h-16 md:h-20 flex justify-start items-center px-4 md:px-8 z-[1000] py-8 md:py-16 transition-all">
      <Link to="/">
        <img
          id="logo"
          src={logo}
          className="w-10 md:w-16 transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1"
          alt="Logo"
        />
      </Link>
    </div>
  );
}

export default Header;

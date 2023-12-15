import { Link, NavLink } from "react-router-dom";
import MetroLogo from "../../assets/images/MetroLogo.png";
import { IoSearchSharp } from "react-icons/io5";
import classNames from "classnames";

export default function MainNavigation() {
  // const location = useLocation();
  // const currentPath = location.pathname;
  // console.log("currentPath", currentPath);
  const links = [
    {
      href: "/search",
      label: (
        <>
          <IoSearchSharp className=" text-4xl mx-3" /> Rental Property
        </>
      ),
    },
    { href: "/services", label: "Our Service" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About us" },
  ];
  return (
    <nav
      className={classNames({
        "flex justify-between space-x-6 py-5 px-10 h-30 items-center z-50 sticky top-0 font-medium": true,
        "pr-5 lg:pr-28": true,
        "bg-black bg-opacity-80": true,
        // " bg-metro-grey": currentPath !== "/",
        // hidden: currentPath === "/",
      })}
    >
      <div
        className={classNames({
          "flex justify-evenly items-center ": true,
        })}
      >
        <Link to="/">
          <img className="w-24 md:w-48 lg:w-96  " src={MetroLogo}></img>
        </Link>
        <Link
          to="/search"
          className=" md:hidden  pl-2 text-base text-gray-100 hover:text-red-500 flex "
        >
          <IoSearchSharp className=" text-4xl mx-3   hover:text-red-500" />{" "}
          Rental Property
        </Link>
        <ul className="md:flex space-x-10 hidden  md:space-x-10 lg:space-x-30  ml-5 ">
          {links.map((link) => (
            <NavLink
              className={classNames({
                "text-xl text-gray-100 hover:text-red-500 flex ": true,
              })}
              key={link.href}
              to={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>

      <Link
        to="/search/results"
        className="text-red-600 font-bold text-2xl hidden lg:block "
      >
        09 391 4642
      </Link>
    </nav>
  );
}

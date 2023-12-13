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
      href: "/",
      label: (
        <>
          <IoSearchSharp className="text-4xl mx-3" /> Rental Property
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
        "flex justify-between space-x-6  py-5 px-14   h-30 items-center z-auto ": true,
        " pr-5 lg:pr-28": true,
        "bg-black bg-opacity-50": true,
        // " bg-metro-grey": currentPath !== "/",
        // hidden: currentPath === "/",
      })}
    >
      <div
        className={classNames({
          "flex justify-between items-center": true,
        })}
      >
        <Link to="/">
          <img className="md:w-48 lg:w-96  " src={MetroLogo}></img>
        </Link>
        <ul className="flex space-x-10 md:space-x-10 lg:space-x-40 ml-10">
          {links.map((link) => (
            <NavLink
              className={classNames({
                "text-xl text-gray-100 hover:text-red-500 flex font-light": true,
              })}
              key={link.href}
              to={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>

      <p className="text-red-600 font-bold text-xl ">09 391 4642</p>
    </nav>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import MetroLogo from "../../assets/images/MetroLogo.png";
import { IoSearchSharp } from "react-icons/io5";
import backgroundImage from "../../assets/images/homepage-bg.jpeg";
const Homepage = () => {
  const [greetings, setGreetings] = useState("Hello World");

  const links = [
    {
      href: "/search",
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

  useEffect(() => {
    axios.get("http://localhost:5000/properties/all").then((res) => {
      console.log(res.data);
      setGreetings(res.data);
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <nav
        className={classNames({
          "flex justify-between space-x-6  py-5 px-14   h-30 items-center z-auto  w-screen": true,
          " pr-5 lg:pr-28": true,

          "bg-black bg-opacity-50": true,
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
      <h1 className="text-6xl my-4 text-red-500 mt-40 mb-12">
        Datas from first property :
      </h1>
      <h2 className="text-5xl text-red-500">{greetings[0].address}</h2>
    </div>
  );
};

export default Homepage;

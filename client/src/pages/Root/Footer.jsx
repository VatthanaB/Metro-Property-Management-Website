import classNames from "classnames";
import MetroLogo from "../../assets/images/MetroLogo.png";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  const footerTextStyles = "text-white font-thin text-md  flex items-center ";
  return (
    <footer
      className={classNames({
        "flex-col justify-center items-center bg-black p-5  ": true,
      })}
    >
      <div
        className={classNames({
          "flex justify-center items-center bg-black  p-10 space-x-40 ": true,
        })}
      >
        <div
          className={classNames({
            "flex-col justify-center items-start bg-black space-y-4": true,
          })}
        >
          <img className="md:w-48 lg:w-96  " src={MetroLogo}></img>
          <p className={footerTextStyles}>
            <FiPhoneCall className="mr-4 text-2xl " />
            09 391 4642
          </p>
          <p className={footerTextStyles}>
            <TfiEmail className="mr-4 text-2xl " />
            info@metronz.co.nz
          </p>
          <p className={footerTextStyles}>
            <IoLocationOutline className="mr-4 text-2xl " />
            Level 33, ANZ Centre, 23-29 Albert Street, Auckland CBD 1010
          </p>
          <p className="text-white font-light text-xl  ">FOLLOW US</p>
          <div className="text-red-600 flex space-x-4 text-2xl">
            <FaFacebookF />
            <RiInstagramFill />
            <FaLinkedinIn /> <FaTwitter />
          </div>
        </div>
        <div
          className={classNames({
            "flex-col justify-center items-start bg-black space-y-3 ": true,
          })}
        >
          <p className={footerTextStyles}>HOME</p>
          <p className={footerTextStyles}>SERVICES</p>
          <p className={footerTextStyles}>TENANTS</p>
          <p className={footerTextStyles}>NEWS</p>
          <p className={footerTextStyles}>ABOUT US </p>
          <p className={footerTextStyles}>DISPUTE RESOLUTION</p>
          <p className={footerTextStyles}>CONTACT US</p>
        </div>
      </div>

      <div className="border-t border-white my-4 max-w-full"></div>
      <div className="flex justify-evenly items-center ">
        <p className="text-white font-light text-base pr-80 mr-40 my-5">
          © 2023 Metro Property Management.
        </p>
      </div>
    </footer>
  );
}

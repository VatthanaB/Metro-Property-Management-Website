/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Custom arrow components
export const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 md:top-2/3 transform -translate-y-1/2 w-8 h-8 mr-7 cursor-pointer z-10"
    onClick={onClick}
  >
    <IoIosArrowForward className="bg-slate-300 bg-opacity-60" />
  </div>
);

export const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 md:top-2/3 transform -translate-y-1/2 w-8 h-8  cursor-pointer z-10"
    onClick={onClick}
  >
    <IoIosArrowBack className="bg-slate-300 bg-opacity-60" />
  </div>
);

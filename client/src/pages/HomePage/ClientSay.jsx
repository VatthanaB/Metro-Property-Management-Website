import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

// const data = [
//   {
//     quoteleft: <BiSolidQuoteAltLeft />,
//     review:
//       "Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.",
//     quoteright: <BiSolidQuoteAltRight />,
//   },
//   {
//     quoteleft: <BiSolidQuoteAltLeft />,
//     review:
//       "Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.",
//     quoteright: <BiSolidQuoteAltRight />,
//   },
//   {
//     quoteleft: <BiSolidQuoteAltLeft />,
//     review:
//       "Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.",
//     quoteright: <BiSolidQuoteAltRight />,
//   },
// ];

function ClientSay() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="flex flex-col justify-center items-start space-y-10 mt-10">
      <h2 className=" text-5xl md:text-[28px] ml-7 md:ml-80">
        What Our Client Says
      </h2>
      <div className="flex flex-col self-center justify-center items-center w-5/6 md:w-3/6">
        <div className="self-start relative top-10 right-5 ">
          <p className="text-red-700 text-4xl  ">{<BiSolidQuoteAltLeft />}</p>
        </div>
        <div className="w-9/12 md:w-11/12 ">
          <p className="text-xl space-y-5">
            Metro Property Management provided an excellent service for my
            rental property.Their team demonstrated professionalism and
            experties, ensuring competitive rental pricing and efficient tenant
            screening.
          </p>
        </div>

        <div className="flex self-end items-end relative  bottom-10 ">
          {" "}
          <p className="text-red-700 text-4xl">{<BiSolidQuoteAltRight />}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientSay;

{
  /* <div className="flex justify-center pt-10 ">
        <div className="grid grid-rows-2 gap-1 mx-28">
          <div>
            <h2 className="text-[28px]">What Our Client Says</h2>
          </div>

          <div className="grid cols-3 grid-rows-3 gap-1">
            <div className="row-span-1 row-start-1 ">
              <p className="text-red-700 text-2xl">{<BiSolidQuoteAltLeft />}</p>
            </div>
            <div className="row-span-2 row-start-2 ">
              <div className="overflow-hidden relative">
                <div className="flex">
                  <div>
                    <p className="text-xl">
                      Metro Property Management provided an excellent service
                      for my rental property.Their team demonstrated
                      professionalism and experties, ensuring competitive rental
                      pricing and efficient tenant screening.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 row-start-3">
              <p className="text-red-700 text-2xl">
                {<BiSolidQuoteAltRight />}
              </p>
            </div>
          </div>
        </div>
      </div> */
}

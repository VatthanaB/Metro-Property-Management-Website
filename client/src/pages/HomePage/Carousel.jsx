import { useState, useEffect } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Carousel = () => {
    //   return <div>Carousel</div>;
    const autoSlide = true;
    const autoSlideInterval = 2000;
    const [curr, setCurr] = useState(0);
    const comments = [
        {
            quoteleft: <BiSolidQuoteAltLeft />,
            comment:
                "Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.",
            quoteright: <BiSolidQuoteAltRight />
        },
        {
            quoteleft: <BiSolidQuoteAltLeft />,
            comment:
                "Efficient and responsive service, making property management stress-free. Highly recommend for their professionalism in property management, Metro NZ's team is knowledgeable and proactice in handling property issues.",
            quoteright: <BiSolidQuoteAltRight />
        },
        {
            quoteleft: <BiSolidQuoteAltLeft />,
            comment:
                "Seamless communication, ensuring all parties are well-informed, Diligent in maintenance management, preserving property value!",
            quoteright: <BiSolidQuoteAltRight />
        },
    ];
    const prev = () =>
        setCurr((curr) => (curr === 0 ? comments.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === comments.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-start space-y-10 mt-10">
                <p className="text-[28px] md:text-[28px] ml-6 sm:ml-10 md:ml-72">
                    What Our Client Says
                </p>
                </div>
                <div className="inset-0 w-full ml-8 mr-0 lg:ml-28 ">
                {/* <div className="flex overflow-hidden text-xl">{comments}</div> */}
                <div className=" overflow-hidden text-xl ml-7 lg:ml-72 md:ml-80 sm:ml-10 h-70 mt-5 px-4 flex flex-col self-center justify-center items-center lg:w-5/6 md:w-3/6">
                    {comments.map((s, i) => (
                        <div
                            key={i}
                            className={`transition-all transform ${curr === i ? "block opacity-100" : "hidden opacity-0"
                                }`}
                        >
                            <div className="flex flex-col self-center justify-center items-center w-5/6 md:w-3/6">
                                <div className="flex self-start items-start sm:top-10 right-4 ">
                                    <p className="text-red-700 text-3xl lg:text-4xl  ">{s.quoteleft}</p>
                                </div>
                                <div className="w-9/12 md:w-11/12 ">
                                    <p className="text-xl space-y-5">{s.comment}</p>
                                </div>
                                <div className="flex self-end items-end right-2 sm:bottom-10 ">
                                    
                                    <p className="text-red-700 text-3xl lg:text-4xl">{s.quoteright}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                
            
            <div className="inset-0 flex items-center justify-center p-2">
                    <button
                        onClick={() => prev}
                        className="text-red-700 text-3xl font-bold
                  p-1"
                    >
                        {<HiChevronLeft />}
                    </button>
                    <div>
                        <div className="flex items-center justify-center gap-2">
                            {comments &&
                                comments.map((s, i) => (
                                    <div
                                        key={i}
                                        className={`transition-all w-1.5 h-1.5
                           bg-red-700 rounded-full ${curr === i ? "p-0.5" : "bg-opacity-50"
                                            }`}
                                    />
                                ))}
                        </div>
                    </div>
                    <button
                        onClick={() => next}
                        className="text-red-700 text-3xl font-bold p-1"
                    >
                        {<HiChevronRight />}
                    </button>
                </div>
        </div>
    );
};

export default Carousel;
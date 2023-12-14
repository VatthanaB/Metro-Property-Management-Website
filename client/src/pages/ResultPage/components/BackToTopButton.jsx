// eslint-disable-next-line react/prop-types
const BackToTopButton = ({ scrollToTop }) => {
  return (
    <button
      className="cursor-pointer px-4 py-2 mx-auto flex justify-center items-center text-white bg-gray-600 rounded-md mt-5 font-light"
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;

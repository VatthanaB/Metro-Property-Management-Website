/* eslint-disable react/prop-types */

// BackToTopButton component receives a prop 'scrollToTop' to handle the scroll functionality.
const BackToTopButton = ({ scrollToTop }) => {
  return (
    // Render a button with styling for a back-to-top functionality.
    <button
      // Apply cursor-pointer style to indicate interactivity.
      className="cursor-pointer px-4 py-2 mx-auto flex justify-center items-center text-white bg-gray-600 rounded-md my-10 font-light"
      // Attach the 'scrollToTop' function to the click event of the button.
      onClick={scrollToTop}
    >
      {/* Text content of the button: "Back to Top" */}
      Back to Top
    </button>
  );
};

// Export the BackToTopButton component.
export default BackToTopButton;

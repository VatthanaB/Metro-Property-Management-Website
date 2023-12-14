import { useState, useEffect } from "react";

/**
 * Custom hook to get the screen size.
 * @returns {Object} - Object containing the width and height of the screen.
 */
const useScreenSize = () => {
  // Set the initial screen size state to the current window size on load (in pixels)
  // This state will be the return value of the hook
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add event listener to update the screen size when the window is resized
  useEffect(() => {
    // Function to handle the resize event and update the state
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  // Return the current screen size
  return screenSize;
};

export default useScreenSize;

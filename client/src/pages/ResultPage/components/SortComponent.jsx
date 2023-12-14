// SortComponent.jsx

// Import the Select component from the 'react-select' library.
import Select from "react-select";

// SortComponent receives a prop 'onSortChange' to handle changes in sorting.
// eslint-disable-next-line react/prop-types
const SortComponent = ({ onSortChange }) => {
  // Define sorting options as an array of objects.
  const options = [
    { value: "asc", label: "Lowest Price" },
    { value: "desc", label: "Highest Price" },
  ];

  // Define a function to handle changes in the selected sorting option.
  const handleChange = (selectedOption) => {
    // Call the 'onSortChange' function with the selected sorting value.
    onSortChange(selectedOption.value);
  };

  // Render a Select component from 'react-select'.
  return (
    <Select
      // Apply styling to the Select component, specifying a quarter of the width.
      className="w-1/4"
      // Provide sorting options to the Select component.
      options={options}
      // Attach the 'handleChange' function to the change event of the Select component.
      onChange={handleChange}
      // Set a placeholder text for the Select component.
      placeholder="Sort"
    />
  );
};

// Export the SortComponent.
export default SortComponent;

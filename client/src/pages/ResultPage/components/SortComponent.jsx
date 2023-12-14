// SortComponent.jsx

import Select from "react-select";

// eslint-disable-next-line react/prop-types
const SortComponent = ({ onSortChange }) => {
  const options = [
    { value: "asc", label: "Lowest Price" },
    { value: "desc", label: "Highest Price" },
  ];

  const handleChange = (selectedOption) => {
    onSortChange(selectedOption.value);
  };

  return (
    <Select
      className="w-1/4"
      options={options}
      onChange={handleChange}
      placeholder="Sort"
    />
  );
};

export default SortComponent;

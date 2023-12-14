import SortComponent from "./SortComponent";
// eslint-disable-next-line react/prop-types
const Header = ({ onSortChange, resultNumber }) => {
  return (
    <>
      <h1 className="text-gray-500 text-lg ml-8 mb-10 ">
        Home Page {">"} Rental Properties {">"} Search Results
      </h1>
      <div className="flex justify-between pl-10 mb-8">
        <SortComponent onSortChange={onSortChange} />
        <p className="text-gray-600 text-lg font-light">
          Showing {resultNumber} results
        </p>
      </div>
      <hr className="border-1 border-gray-300 w-full my-2" />
      <h1 className="text-gray-500 text-3xl ml-8 ">Browse Properties</h1>
    </>
  );
};

export default Header;

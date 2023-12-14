import {
  LocationInput,
  TypeInput,
  PriceInput,
  BedroomInput,
  BathroomInput,
  ParkingInput,
  AmenititesInput,
  VicinityInput,
} from "./formButtons/FormInputs";
import { Link } from "react-router-dom";
const SearchForm = () => {
  return (
    <form className="flex justify-between">
      <div className="flex-col items-start justify-start w-1/4">
        <LocationInput />
        <TypeInput />
        <PriceInput />
      </div>
      <div className="flex-col items-start justify-start w-1/4">
        <BedroomInput />
        <BathroomInput />
        <ParkingInput />
      </div>
      <div className="flex-col items-start justify-start w-1/4">
        <AmenititesInput />
        <VicinityInput />
        <Link to={"/search/results"}>
          <button className="w-full border bg-red-500 text-white rounded-md h-10 mt-5 ml-5">
            Search
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SearchForm;

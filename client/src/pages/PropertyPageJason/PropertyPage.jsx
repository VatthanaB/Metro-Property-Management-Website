// Importing necessary hooks and components from 'react-router-dom' and local files
import { useRouteLoaderData, useParams, Link } from "react-router-dom";
import DynamicCarouselDiv from "./components/DynamicCarouselDiv";
import MatchPriceAndAmenities from "../ResultPage/components/propertyCardComponents/PriceAndAmenities";

// PropertyPage is a functional component
const PropertyPage = () => {
  // useRouteLoaderData hook is used to fetch data associated with the "root" route
  const data = useRouteLoaderData("root");

  // useParams hook is used to access the route parameters, here it's extracting the 'id'
  const { id } = useParams();

  // Finding the property object from 'data' that has an '_id' matching the 'id' from the route parameters
  const property = data.find((item) => item._id === id);

  // Logging data, id, and property to the console for debugging purposes
  console.log(data); // This will log the data array
  console.log(id); // This will log the ID of the property
  console.log(property); // This will log the property object with the corresponding ID

  // The component returns a JSX structure
  return (
    <div className="flex flex-col items-center justify-center w-screen ">
      <div className="w-full lg:w-4/5">
        <h1 className="text-gray-500 text-sm md:text-lg pl-2 lg:pl-8 mt-3 lg:mt-12 self-start ">
          {/* Navigation links */}
          <Link to="/">Home Page</Link> {">"}{" "}
          <Link to="/search">Rental Properties </Link>
          {">"} <Link to="/search/results">Search Results</Link> {">"} Property
        </h1>
      </div>
      {/* DynamicCarouselDiv component is passed the 'property' object as a prop */}
      <DynamicCarouselDiv property={property} />
      <div className="flex flex-col">
        <MatchPriceAndAmenities property={property} />
      </div>
    </div>
  );
};

// Exporting PropertyPage component for use in other parts of the application
export default PropertyPage;

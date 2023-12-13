import { useRouteLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";
const ResultPage = () => {
  const data = useRouteLoaderData("root");

  console.log(data);
  console.log("ResultPage");

  return (
    <div className="flex flex-col items-center justify-center  px-10">
      {data.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default ResultPage;

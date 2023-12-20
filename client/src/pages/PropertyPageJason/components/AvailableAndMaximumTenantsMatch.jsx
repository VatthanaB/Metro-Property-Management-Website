const AvailableAndMaximumTenantsMatch = () => {
  return (
    <div className="  md:flex flex-col justify-between my-3 text-{fontColor}-600 font-normal ">
      <div className="md:flex-col md:w-full px-2">
        <div className="flex justify-between w-full px-5 text-lg">
          <p>Available</p>
          <p> Tue, 12 Dec 2023</p>
        </div>
        <hr className="border-1 border-gray-300 w-full my-2" />
      </div>

      <div className="flex-col md:w-full px-2 font-normal">
        <div className="flex justify-between w-full px-5 text-lg">
          <p>Maximum Tenants</p>
          <p className="md:hidden"> 4</p>
          <p className="hidden md:flex">Suitable for up to 4 tenants</p>
        </div>
        <hr className=" border-1 border-gray-300 w-full my-2" />
      </div>
    </div>
  );
};

export default AvailableAndMaximumTenantsMatch;

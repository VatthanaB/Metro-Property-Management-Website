const AvailableAndMaximumTenants = () => {
  return (
    <div className="  md:flex justify-between my-3 text-{fontColor}-600 font-normal ">
      <div className="md:flex-col md:w-1/2 px-2">
        <div className="flex justify-between w-full px-5 text-lg">
          <p>Available</p>
          <p> Tue, 12 Dec 2023</p>
        </div>
        <hr className="border-1 border-gray-300 w-full my-2" />
      </div>

      <div className="flex-col md:w-1/2 px-2">
        <div className="flex justify-between w-full px-5">
          <p>Maximum Tenants</p>
          <p> 4</p>
        </div>
        <hr className=" border-1 border-gray-300 w-full my-2" />
      </div>
    </div>
  );
};

export default AvailableAndMaximumTenants;

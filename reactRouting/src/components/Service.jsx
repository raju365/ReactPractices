import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-thin mb-5">Service </h1>
      <button
        onClick={() => navigate("/services/detail")}
        className="bg-white text-black px-4 py-2 rounded mt-5"
      >
        More Details
      </button>
      <hr className="mt-10" />
      <Outlet/>
    </div>
  );
};

export default Service;

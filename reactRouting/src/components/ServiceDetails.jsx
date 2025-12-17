import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
    const navigate = useNavigate()
   
  return (
    <div>
        <h1 className="text-4xl font-thin mb-3">More services</h1>
        <h2 className="text-2xl font-thin mb-5">Choose us</h2>
        <button onClick={()=>navigate(-1)} className="bg-white text-black px-4 py-2 rounded">Go back</button>
    </div>
  )
}

export default ServiceDetails
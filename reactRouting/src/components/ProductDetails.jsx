import {  useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params);
  return (
    <div>
        <h1 className="text-4xl font-thin mb-3">{params.name}</h1>
        <h2 className="text-2xl font-thin mb-5">Product Details...</h2>
        <button onClick={()=>navigate(-1)} className="bg-white text-black px-4 py-2 rounded">Go back</button>
       
    </div>
  )
}

export default ProductDetails
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 6;

const Products = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const [products, setProducts] = useState([]);

  const [hasMore, setHasMore] = useState(true);

  // 🟢 Fetch products function
  const fetchMoreProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=${LIMIT}&_start=${products.length}`
      );

      if (data.length === 0) {
        setHasMore(false);
        return;
      }
      setProducts([...products, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Load first page
  useEffect(() => {
    fetchMoreProducts();
  }, []);

  const addToCertHandler = (id) => {
    if (!currentUser) {
      alert("Please login first!");
      return;
    }

    const cartCopy = currentUser.cart?.map((i) => ({ ...i })) || [];

    const index = cartCopy.findIndex((i) => i.productId == id);

    if (index === -1) {
      cartCopy.push({ productId: id, quantity: 1 });
    } else {
      cartCopy[index].quantity += 1;
    }

    const updatedUser = { ...currentUser, cart: cartCopy };

    dispatch(asyncUpdateUser(updatedUser.id, updatedUser));
    toast.success("Product added to cart!");
  };

  return (
    <div className="min-h-svh bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Our Products ✨
      </h1>

      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p className="text-center mt-4 font-semibold">No more products</p>
        }
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-3xl p-5 flex flex-col"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full"
              />
            </div>

            <h2 className="text-xl font-bold mt-4">{product.title}</h2>
            <p className="text-indigo-600 font-semibold text-lg">
              ₹ {product.price}
            </p>

            <div className="mt-auto flex justify-between pt-4">
              <Link
                to={`/product/${product.id}`}
                className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm"
              >
                View Details
              </Link>

              <button
                onClick={() => addToCertHandler(product.id)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Products;

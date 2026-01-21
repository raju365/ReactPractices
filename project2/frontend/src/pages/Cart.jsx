import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const products = useSelector((state) => state.productReducer.products);

  if (!currentUser) {
    return (
      <div className="min-h-svh flex items-center justify-center text-xl text-gray-600">
        Please Login First 🔐
      </div>
    );
  }

  const cart = currentUser.cart || [];

  const getProduct = (id) => products.find((p) => p.id == id);

  const updateUserCart = (newCart) => {
    const updatedUser = { ...currentUser, cart: newCart };
    dispatch(asyncUpdateUser(updatedUser.id, updatedUser));
  };

  const increaseQty = (productId) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateUserCart(updatedCart);
  };

  const decreaseQty = (productId) => {
    let updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updatedCart = updatedCart.filter((item) => item.quantity > 0);
    updateUserCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    updateUserCart(updatedCart);
    toast.success("Item removed from cart!");
  };

  const totalAmount = cart.reduce((total, item) => {
    const product = getProduct(item.productId);
    return total + product.price * item.quantity;
  }, 0);

  return (
    <div className="min-h-svh bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          Your cart is empty 😕  
          <Link
            to="/products"
            className="block text-indigo-600 font-semibold mt-4 underline"
          >
            Go Shopping →
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {cart.map((item) => {
              const product = getProduct(item.productId);

              return (
                <div
                  key={item.productId}
                  className="bg-white shadow-md rounded-2xl p-5 flex gap-5 items-center"
                >
                  <img
                    src={product.image}
                    className="h-24 w-24 object-contain rounded-xl bg-gray-100"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900">
                      {product.title}
                    </h2>

                    <p className="text-indigo-600 font-semibold text-lg mt-1">
                      ₹ {product.price}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <button
                        onClick={() => decreaseQty(item.productId)}
                        className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 font-bold"
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.productId)}
                        className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>

            <div className="flex justify-between text-lg text-gray-700 mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-indigo-600 mt-4">
              <span>Total Amount</span>
              <span>₹ {totalAmount}</span>
            </div>

            <button className="w-full mt-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all">
              Checkout Now 💳
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;

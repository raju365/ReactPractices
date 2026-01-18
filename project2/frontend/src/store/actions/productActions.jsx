import axios from "../../api/axiosconfig";
import { loadProduct } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {
    console.log(error);
  }
};
export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log("Error in asyncCreateProduct action:", error);
  }
};
export const asyncUpdateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.patch(`/products/${product.id}`, product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log("Error in asyncUpdateProduct action:", error);
  }
};


import axios from "../../api/axiosconfig";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const stored = localStorage.getItem("user");

    // ⚠️ Handle bad values (undefined / null / empty)
    if (!stored || stored === "undefined" || stored === "null") {
     
      return;
    }

    const userFromStorage = JSON.parse(stored);
    dispatch(loadUser(userFromStorage));
  } catch (error) {
    console.log("Error in asyncCurrentUser action:", error);
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
   
  } catch (error) {
    console.log("Error in asyncLogoutUser action:", error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
    dispatch(loadUser(data[0]));
  } catch (error) {
    console.log("Error in asyncLoginUser action:", error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res.data);
  } catch (error) {
    console.log("Error in asyncRegisterUser action:", error);
  }
};
export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    dispatch(asyncCurrentUser());
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log("Error in asyncUpdateUser action:", error);
  }
};
export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.delete("/users/" + id);
    dispatch(asyncCurrentUser());
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log("Error in asyncDeleteUser action:", error);
  }
};

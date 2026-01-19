import axios from "../../api/axiosconfig";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromStorage) dispatch(loadUser(userFromStorage));
    else console.log("user not logged in.");
  } catch (error) {
    console.log("Error in asyncCurrentUser action:", error);
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user") ;
    dispatch(removeUser());
    console.log("User Logged Out");
    
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

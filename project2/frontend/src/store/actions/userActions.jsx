import axios from "../../api/axiosconfig";



export const asyncLoginUser = (user) =>async (dispatch, getState) => {
  try {
    const {data} = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    console.log(data[0]);
  
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

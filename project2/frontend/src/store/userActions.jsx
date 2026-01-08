import axios from "../api/axiosconfig"
import { loadUsers } from "./userSlice";

export const asyncgetusers = () => async (dispatch,getState) => {
    try {
        console.log("current state>>>>>",getState());
        const res = await axios.get("/users");
        dispatch(loadUsers(res.data));

    } catch (error) {
        console.log(error);
    }
}

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
        state.data = action.payload;
    },
  },
});
export const { loadUsers } = userSlice.actions;
export default userSlice.reducer;

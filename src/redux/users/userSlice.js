import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: 'loading',
  data: []
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.data = action.payload
      state.status = 'finished'
    }
  }
})
export const { setUsersData } = userSlice.actions;

export const listUsers = (state) => state.users.data;

export default userSlice.reducer;
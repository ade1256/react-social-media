import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: 'loading',
  data: []
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsData: (state, action) => {
      state.data = action.payload
      state.status = 'finished'
    }
  }
})
export const { setPostsData } = postSlice.actions;

export const listPosts = (state) => state.posts.data;

export default postSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: 'idle',
  data: []
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setCommentsData: (state, action) => {
      state.status = 'loading'
      state.data = action.payload
      state.status = 'idle'
    }
  }
})
export const { setCommentsData } = commentSlice.actions;

export const listComments = (state) => state.comments.data;

export default commentSlice.reducer;
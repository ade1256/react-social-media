import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: 'loading',
  data: []
}

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotosData: (state, action) => {
      state.data = action.payload
      state.status = 'finished'
    },
  }
})
export const { setPhotosData } = photoSlice.actions;

export const listPhotos = (state) => state.photos.data;

export default photoSlice.reducer;
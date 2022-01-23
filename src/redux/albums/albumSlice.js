import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: 'loading',
  data: []
}

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbumData: (state, action) => {
      state.data = action.payload
      state.status = 'finished'
    }
  }
})
export const { setAlbumData } = albumSlice.actions;

export const listAlbums = (state) => state.albums.data;

export default albumSlice.reducer;
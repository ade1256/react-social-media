import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from '../redux/posts/postSlice';
import commentSliceReducer from '../redux/comments/commentSlice';
import userSliceReducer from '../redux/users/userSlice';
import albumSliceReducer from '../redux/albums/albumSlice';
import photoSliceReducer from '../redux/photos/photoSlice';

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    comments: commentSliceReducer,
    users: userSliceReducer,
    albums: albumSliceReducer,
    photos: photoSliceReducer
  },
});

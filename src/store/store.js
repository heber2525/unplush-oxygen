import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../slices/photoSlice";
import favoriteReducer from "../slices/favPhotoSlice";

const store = configureStore({
  reducer: { photos: photosReducer, favPhotos: favoriteReducer },
});
export default store;

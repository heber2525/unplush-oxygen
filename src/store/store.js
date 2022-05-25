import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../slices/photoSlice";

const store = configureStore({
  reducer: { photos: photosReducer },
});
export default store;

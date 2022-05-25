import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { fetchPhotos } from "./photoSlice";

// export const fetchPhotos = createAsyncThunk("photos/addPhotos", async () => {
//   const response = await axios.get(
//     "https://api.unsplash.com/photos/?client_id=wYlJu1LRxSFyU5boA7mw5hEM8OVejzY-wHFwlTBZYY8&per_page=50"
//   );
//   return response.data;
// });
function addPhoto(photos) {
  localStorage.setItem("favPhotos", JSON.stringify(photos));
}

function getPhotos() {
  const fromStorage = localStorage.getItem("favPhotos");
  return fromStorage ? JSON.parse(fromStorage) : [];
}

export const favPhotoSlice = createSlice({
  name: "favPhotos",
  initialState: {
    listFavPhotos: [],
  },
  reducers: {
    setFavPhotos: (state, action) => {
      state.listFavPhotos = action.payload;
    },
    addToFavorites: (state, action) => {
      state.listFavPhotos.push(action.photo);
      addPhoto(state.photos);
    },
    removeFromFavorites: (state, action) => {
      state.listFavPhotos = state.apiPhotos.filter((photo) => photo.id !== action.payload.id);
      getPhotos(state.apiPhotos);
    },
    editPhoto: (state, action) => {
      const newPhotos = [...state.photos];
      newPhotos[action.index].description = action.description;
      state.photos = newPhotos;
      addPhoto(state.photos);
    },
    // addPhoto: (state, action) => {
    //   state.listFavPhotos = action.payload;
    // },
  },
  extraReducers(builder) {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.listFavPhotos = action.payload;
    });
  },
});
export const { addToFavorites, removeFromFavorites, editPhoto } = favPhotoSlice.actions;
// export const favorites = (state) => state.favorite_photos.photos;

export default favPhotoSlice.reducer;

// import {
//   favourites
// } from './photosSlice'
// const photos = useSelector(favourites);

// Photos.jsx

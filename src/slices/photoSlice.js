import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhotos = createAsyncThunk("photos/getPhotos", async (inputData) => {
  const urlPassword = "wYlJu1LRxSFyU5boA7mw5hEM8OVejzY-wHFwlTBZYY8";
  let URL;
  if (inputData && inputData.length) {
    URL = `https://api.unsplash.com/search/photos?client_id=${urlPassword}&query=${inputData}&per_page=20`;
  } else {
    URL = `https://api.unsplash.com/photos/random?client_id=${urlPassword}&count=20`;
  }
  const response = await axios.get(URL);
  if (inputData && inputData.length) {
    return response.data.results;
  } else {
    return response.data;
  }
});

export const photoSlice = createSlice({
  name: "photos",
  initialState: {
    listPhotos: [],
  },
  reducers: {
    setListPhotos: (state, action) => {
      state.listPhotos = action.payload;
    },
    setFilteredPhotos: (state, action) => {
      state.filteredPhotos = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.listPhotos = action.payload;
    });
  },
});

export const { setListPhotos, setFilteredPhotos, listPhotos } = photoSlice.actions;
export default photoSlice.reducer;

// export const addPhoto = (photos) => {
//   localStorage.setItem("favPhotos", JSON.stringify(photos));
// };

// export const getPhotos = () => {
//   const fromStorage = localStorage.getItem("favPhotos");
//   return fromStorage ? JSON.parse(fromStorage) : [];
// };

// export const addToFavorites = (state, action) => {
//   state.apiPhotos.push(action.photo);
//   addPhoto(state.photos);
// };
// export const removeFromFavorites = (state, action) => {
//   state.apiPhotos = state.apiPhotos.filter((photo) => photo.id !== action.payload.id);
//   addPhoto(state.apiPhotos);
// };
// export const editPhoto = (state, action) => {
//   const newPhotos = [...state.photos];
//   newPhotos[action.index].description = action.description;
//   state.photos = newPhotos;
//   addPhoto(state.photos);
// };
// export const { addToFavorites, removeFromFavorites, editPhoto } = counterSlice.actions;
// export const favorites = (state) => state.favorite_photos.photos;
// Photos.jsx;

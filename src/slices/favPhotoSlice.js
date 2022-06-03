import { createSlice } from "@reduxjs/toolkit";

function addPhoto(photos) {
  localStorage.setItem("listFavPhotos", JSON.stringify(photos));
}

function getPhotos() {
  const arrayFromStorage = localStorage.getItem("listFavPhotos");

  return arrayFromStorage ? JSON.parse(arrayFromStorage) : [];
}

export const favPhotoSlice = createSlice({
  name: "favPhotos",
  initialState: {
    listFavPhotos: getPhotos(),
  },
  reducers: {
    setFavPhotos: (state) => {
      addPhoto(state.listFavPhotos);
    },
    addToFavorites: (state, action) => {
      state.listFavPhotos.push(action.payload);
      addPhoto(state.listFavPhotos);
    },
    removeFromFavorites: (state, action) => {
      const newFavArray = state.listFavPhotos.filter((listFavPhotos) => listFavPhotos.id !== action.payload.id);
      getPhotos(state.listFavPhotos);
      state.listFavPhotos = newFavArray;
    },
    editPhoto: (state, action) => {
      const newLisOfPhotos = [...state.listFavPhotos];
      const index = newLisOfPhotos.findIndex((photo) => photo.id === action.payload.id);
      newLisOfPhotos[index].description = action.payload.description;
      state.listFavPhotos = newLisOfPhotos;
      addPhoto(state.listFavPhotos);
    },
  },
});
export const { addToFavorites, removeFromFavorites, editPhoto, setFavPhotos } = favPhotoSlice.actions;
export const favorites = (state) => state.favPhotos.listFavPhotos;

export default favPhotoSlice.reducer;

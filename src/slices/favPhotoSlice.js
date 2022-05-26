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
      newLisOfPhotos[action.index].description = action.description;
      state.listFavPhotos = newLisOfPhotos;
      addPhoto(state.listFavPhotos);
    },
    // addPhoto: (state, action) => {
    //   state.listFavPhotos = action.payload;
    // },
  },
  // extraReducers(builder) {
  //   builder.addCase(fetchPhotos.fulfilled, (state, action) => {
  //     state.listFavPhotos = action.payload;
  //   });
  // },
});
export const { addToFavorites, removeFromFavorites, editPhoto, setFavPhotos } = favPhotoSlice.actions;
// export const favorites = (state) => state.favorite_photos.photos;

export default favPhotoSlice.reducer;

// import {
//   favourites
// } from './photosSlice'
// const photos = useSelector(favourites);

// Photos.jsx

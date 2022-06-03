// import React, { useEffect, useState } from "react";
import "./searchFav.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { setListPhotos } from "../slices/photoSlice";
import { useState } from "react";
// import { fetchPhotos } from "../slices/photoSlice";
import { favPhotoSlice } from "../slices/favPhotoSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

function SearchFav() {
  const favoritesPhotos = useSelector((store) => store.favPhotos);

  const [inputFavData, setInputFavData] = useState("");
  const dispatch = useDispatch();
  // const location = useLocation();

  // console.log("este es el location" + location.pathname);

  // const handleChange = (e) => {
  //   if (location.pathname === "/") {
  //     setInputFavData(e.target.value);
  //     dispatch(fetchPhotos(e.target.value));
  //   } else {
  //     console.log("otra cosa");
  //   }
  // };
  const handleChange = (e) => {
    setInputFavData(e.target.value);
    dispatch(favoritesPhotos(e.target.value));
  };

  return (
    <>
      <form className="search">
        <input
          className="search__input"
          type="text"
          placeholder="search"
          value={inputFavData}
          onChange={handleChange}
        />
        <select className="search__select">
          <option value=""></option>
          <option value="">small</option>
          <option value="">medium</option>
          <option value="">large</option>
        </select>
        <button className="search__button-submit" type="submit ">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchFav;

// import React, { useEffect, useState } from "react";
import "./search.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { setListPhotos } from "../slices/photoSlice";
import { useState } from "react";
import { fetchPhotos } from "../slices/photoSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function Search() {
  const [inputData, setInputData] = useState("");
  // const [inputFavData, setInputFavData] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("este es el location" + location.pathname);

  const handleChange = (e) => {
    if (location.pathname === "/") {
      setInputData(e.target.value);
      dispatch(fetchPhotos(e.target.value));
    } else {
      console.log("otra cosa");
    }
  };

  return (
    <>
      <form className="search">
        <input className="search__input" type="text" placeholder="search" value={inputData} onChange={handleChange} />
        {/* <select className="search__select">
          <option value=""></option>
          <option value="">small</option>
          <option value="">medium</option>
          <option value="">large</option>
        </select> */}
        <button className="search__button-submit" type="submit ">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;

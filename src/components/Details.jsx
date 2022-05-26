import "./details.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavPhotos } from "../slices/favPhotoSlice";

const Details = () => {
  const allPhotos = useSelector((store) => store.photos.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFavPhotos());
  }, [dispatch]);

  return (
    <>
      <div className="favorites-container">
        <p>{allPhotos.listPhotos.sponsorhip.sponsor.username}</p>
      </div>
    </>
  );
};

export default Details;

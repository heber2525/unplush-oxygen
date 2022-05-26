import "./favorites.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editPhoto, removeFromFavorites, setFavPhotos } from "../slices/favPhotoSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Masonry from "react-masonry-css";

function Favorites() {
  const favoritesPhotos = useSelector((state) => state.favPhotos.listFavPhotos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavPhotos());
  }, [dispatch]);

  const handleDelete = (photo) => {
    dispatch(removeFromFavorites(photo));
    console.log("click a delete");
  };
  const handleChange = (element) => {
    dispatch(editPhoto(element));
  };
  const breakpoint = {
    default: 3,
    850: 1,
  };

  return (
    <>
      <div className="favorites-container">
        <Masonry breakpointCols={breakpoint} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {favoritesPhotos.map((photo, index) => (
            <div key={index} className="photos-container">
              <img key={photo} src={photo.urls.small} alt="" />
              <div className="author">
                <img className="author__image" src={photo.user.profile_image.medium} alt="" />
                <div className="author__detail">
                  <div className="author__name">
                    <h5>Author:</h5>
                    <span>{photo.user.name}</span>
                  </div>
                  <div className="author__portfolio">
                    <h5>Portfolio:</h5> <span>{photo.user.portfolio_url}</span>
                  </div>
                  <div className="author__likes">
                    <h5>Likes:</h5>
                    <span> {photo.likes} </span>
                  </div>
                </div>
              </div>
              <div className="hover-action-icons">
                <div className="container-icon-trash">
                  <span className="icon-trash">
                    <DeleteOutlineIcon className="delete-icon" onClick={() => handleDelete(photo)} />
                  </span>
                  <span className="icon-pencil">
                    <EditIcon className="edit-icon" onClick={() => handleChange(photo)} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
}

export default Favorites;

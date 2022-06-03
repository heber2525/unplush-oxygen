import "./favorites.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editPhoto, removeFromFavorites, setFavPhotos } from "../slices/favPhotoSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Masonry from "react-masonry-css";
import BasicModal from "./Modal";

function Favorites() {
  const favoritesPhotos = useSelector((state) => state.favPhotos.listFavPhotos);
  const [open, setOpen] = useState(false);
  const [currentEditId, setCurrentEditId] = useState("");

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

  const handleOpenModal = (id) => {
    setCurrentEditId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentEditId("");
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
            <div key={photo.id} className="photos-container">
              <img src={photo.urls.small} alt="" />
              <div className="author">
                <img className="author__image" src={photo.user.profile_image.medium} alt="" />
                <div className="author__detail">
                  <div className="author__name">
                    <h5>
                      Author: <span>{photo.user.name}</span>
                    </h5>
                  </div>

                  <div className="author__description">
                    <h5>Description:</h5>
                    <span> {photo.description} </span>
                  </div>
                  <div className="author__width">
                    <h5>
                      Width: <span> {photo.width} </span>
                    </h5>
                  </div>
                  <div className="author__height">
                    <h5>
                      Height: <span> {photo.height} </span>
                    </h5>
                  </div>

                  <div className="author__likes">
                    <h5>
                      Likes: <span> {photo.likes} </span>
                    </h5>
                  </div>

                  <div className="author__time">
                    <h5>
                      Time:<span> {photo.created_at} </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="hover-action-icons">
                <div className="container-icon-trash">
                  <span className="icon-trash">
                    <DeleteOutlineIcon className="delete-icon" onClick={() => handleDelete(photo)} />
                  </span>
                  <span className="icon-pencil">
                    <EditIcon className="edit-icon" onClick={() => handleOpenModal(photo.id)} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
        <BasicModal open={open} onClose={handleClose} idPhoto={currentEditId} />
      </div>
    </>
  );
}

export default Favorites;

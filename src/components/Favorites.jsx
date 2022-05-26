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

  const handleDelete = (listFavPhotos) => {
    dispatch(removeFromFavorites(listFavPhotos));
    console.log("click a delete");
  };
  const handleChange = (element) => {
    dispatch(editPhoto(element.id));
  };
  const breakpoint = {
    default: 3,
    850: 1,
  };

  return (
    <>
      <div className="favorites-container">
        <Masonry breakpointCols={breakpoint} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {favoritesPhotos.map((e) => (
            <div className="photos-container">
              <img key={e} src={e.urls.small} alt="" />
              <div className="hover-action-icons">
                <div className="container-icon-trash">
                  <span className="icon-trash">
                    <DeleteOutlineIcon onClick={handleDelete} />
                  </span>
                  <span className="icon-pencil">
                    <EditIcon onClick={handleChange} />
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

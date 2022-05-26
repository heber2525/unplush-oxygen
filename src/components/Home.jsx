import "./home.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../slices/photoSlice";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToFavorites } from "../slices/favPhotoSlice";

const Home = () => {
  const allPhotos = useSelector((store) => store.photos);
  console.log(allPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleAddFavorites = (element) => {
    dispatch(addToFavorites(element));
    console.log("you clicked");
  };

  const breakpoint = {
    default: 3,
    850: 1,
  };

  return (
    <>
      <div className="home-container">
        <Masonry breakpointCols={breakpoint} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {allPhotos.listPhotos.map((e) => (
            <div className="photos-container">
              <img key={e.id} src={e.urls.small} alt="" />
              <div className="hover-action-icons">
                <span className="icon-border-heart">
                  {/* <FavoriteBorderIcon className="heart" /> */}
                  <FavoriteBorderIcon onClick={() => handleAddFavorites(e)} />
                </span>
                <div className="container-icon-trash">
                  <span className="icon-trash">{/* <DeleteOutlineIcon onClick={handleClick} /> */}</span>
                  <span className="icon-pencil">{/* <EditIcon /> */}</span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};
export default Home;
